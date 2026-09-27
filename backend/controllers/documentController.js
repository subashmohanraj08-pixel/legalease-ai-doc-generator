const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const Anthropic = require('@anthropic-ai/sdk');
const Document = require('../models/Document');

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Extract raw text from an uploaded file based on its extension
async function extractText(filePath, mimeType) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.pdf') {
    const buffer = fs.readFileSync(filePath);
    const data = await pdfParse(buffer);
    return data.text;
  }

  if (ext === '.txt') {
    return fs.readFileSync(filePath, 'utf-8');
  }

  // .doc / .docx: plain extraction not supported without extra deps (mammoth).
  // Returning a placeholder keeps the pipeline functional; swap in mammoth for real parsing.
  return '';
}

// Ask Claude to analyze the extracted legal text and return structured JSON
async function analyzeWithAI(text) {
  const truncated = text.slice(0, 15000); // keep prompt within a reasonable size

  const prompt = `You are a legal document analysis assistant. Analyze the following legal document text and respond with ONLY a valid JSON object (no markdown, no preamble) matching this exact shape:

{
  "documentType": "string, e.g. 'Non-Disclosure Agreement'",
  "summary": "2-4 sentence plain-language summary",
  "keyClauses": ["short description of each key clause"],
  "risks": ["potential risks or red flags for the signing party"],
  "obligations": ["key obligations each party must fulfil"],
  "importantDates": ["any deadlines, effective dates, or terms found"],
  "plainLanguageExplanation": "a longer, plain-English explanation a non-lawyer could understand"
}

Document text:
"""
${truncated}
"""`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  });

  const textBlock = response.content.find((b) => b.type === 'text');
  const raw = textBlock ? textBlock.text : '{}';
  const cleaned = raw.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    return {
      documentType: 'Unknown',
      summary: 'The AI response could not be parsed as structured data.',
      keyClauses: [],
      risks: [],
      obligations: [],
      importantDates: [],
      plainLanguageExplanation: raw,
    };
  }
}

// @route POST /api/documents/upload
const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file was uploaded' });
    }

    const doc = await Document.create({
      user: req.user._id,
      originalName: req.file.originalname,
      storedFileName: req.file.filename,
      filePath: req.file.path,
      mimeType: req.file.mimetype,
      fileSize: req.file.size,
      status: 'processing',
    });

    // Fire off extraction + analysis; respond immediately with the doc record
    res.status(201).json(doc);

    try {
      const text = await extractText(doc.filePath, doc.mimeType);
      doc.extractedText = text;

      if (text && text.trim().length > 0) {
        const analysis = await analyzeWithAI(text);
        doc.analysis = analysis;
        doc.status = 'analyzed';
      } else {
        doc.status = 'failed';
        doc.errorMessage = 'No extractable text found in this file type.';
      }
      await doc.save();
    } catch (procErr) {
      doc.status = 'failed';
      doc.errorMessage = procErr.message;
      await doc.save();
    }
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

// @route GET /api/documents
const getDocuments = async (req, res) => {
  try {
    const docs = await Document.find({ user: req.user._id })
      .select('-extractedText')
      .sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch documents', error: err.message });
  }
};

// @route GET /api/documents/:id
const getDocumentById = async (req, res) => {
  try {
    const doc = await Document.findOne({ _id: req.params.id, user: req.user._id });
    if (!doc) return res.status(404).json({ message: 'Document not found' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch document', error: err.message });
  }
};

// @route DELETE /api/documents/:id
const deleteDocument = async (req, res) => {
  try {
    const doc = await Document.findOne({ _id: req.params.id, user: req.user._id });
    if (!doc) return res.status(404).json({ message: 'Document not found' });

    if (fs.existsSync(doc.filePath)) {
      fs.unlinkSync(doc.filePath);
    }
    await doc.deleteOne();
    res.json({ message: 'Document deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete document', error: err.message });
  }
};

// @route POST /api/documents/:id/reanalyze
const reanalyzeDocument = async (req, res) => {
  try {
    const doc = await Document.findOne({ _id: req.params.id, user: req.user._id });
    if (!doc) return res.status(404).json({ message: 'Document not found' });

    doc.status = 'processing';
    await doc.save();

    const analysis = await analyzeWithAI(doc.extractedText);
    doc.analysis = analysis;
    doc.status = 'analyzed';
    await doc.save();

    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: 'Re-analysis failed', error: err.message });
  }
};

module.exports = {
  uploadDocument,
  getDocuments,
  getDocumentById,
  deleteDocument,
  reanalyzeDocument,
};
