const express = require('express');
const router = express.Router();

// Importo la logica del controller
const authController = require('../controllers/auth');

router.post('/login', authController.login);

module.exports = router;