const express = require('express');
const router = express.Router();

// Importo la logica del controller
const postsController = require('../controllers/posts.js');
// Importo il modulo che farà da body-parser per i file 
const multer = require("multer");
// Dichiaro una costante che indicherà dove verranno salvati i file in upload
const uploader = multer({dest: "public"});

// Importo il middleware per limitare l'accesso alle rotte agli utenti loggati
const authenticateWithJWT = require('../middleware/authenticateWithJWT.js');

// Importo il middleware per proteggere le rotte riservate agli admin
const isAdmin = require('../middleware/isAdmin.js');

router.get('/', postsController.index);

router.post('/', authenticateWithJWT, isAdmin, uploader.single('image'), postsController.create);

router.get('/:slug', postsController.show);

router.get('/:slug/download', postsController.download);

router.delete('/:slug', authenticateWithJWT, isAdmin, postsController.destroy);

module.exports = router