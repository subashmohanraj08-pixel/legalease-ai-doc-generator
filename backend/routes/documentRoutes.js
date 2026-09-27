const express = require('express');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
  uploadDocument,
  getDocuments,
  getDocumentById,
  deleteDocument,
  reanalyzeDocument,
} = require('../controllers/documentController');

const router = express.Router();

router.use(protect);

router.post('/upload', upload.single('document'), uploadDocument);
router.get('/', getDocuments);
router.get('/:id', getDocumentById);
router.delete('/:id', deleteDocument);
router.post('/:id/reanalyze', reanalyzeDocument);

module.exports = router;
