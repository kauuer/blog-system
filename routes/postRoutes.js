const express = require('express');
const { createPost } = require('../controllers/postController');
const auth = require('../middleares/auth'); // Middleware de autenticação
const router = express.Router();

router.post('/create', auth, createPost);

module.exports = router;