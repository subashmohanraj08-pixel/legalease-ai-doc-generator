const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    originalName: { type: String, required: true },
    storedFileName: { type: String, required: true },
    filePath: { type: String, required: true },
    mimeType: { type: String },
    fileSize: { type: Number },

    extractedText: { type: String, default: '' },

    status: {
      type: String,
      enum: ['uploaded', 'processing', 'analyzed', 'failed'],
      default: 'uploaded',
    },
    errorMessage: { type: String },

    analysis: {
      summary: { type: String, default: '' },
      documentType: { type: String, default: '' },
      keyClauses: [{ type: String }],
      risks: [{ type: String }],
      obligations: [{ type: String }],
      importantDates: [{ type: String }],
      plainLanguageExplanation: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Document', DocumentSchema);
