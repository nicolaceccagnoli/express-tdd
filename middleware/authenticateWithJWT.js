// Importo la libreria di jsonwebtoken
const jwt = require("jsonwebtoken");

// Carico le variabili d'ambiente
require("dotenv").config();

// Definisco un middleware per gli utenti loggati
const authenticateWithJWT = (req, res, next) => {
    // Verifico che l'utente abbia inviato un token
    const { authorization } = req.headers;

    // Se non ha inviato un token
    if (!authorization) {
        return res.status(404).send('Utente non verificato');
    }

    // Raccolgo il token
    const token = authorization.split(' ')[1]; //Separo il token dal Bearer

    // Verifico che il token sia autentico
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // Se c'è un errore
        if (err) {
            // Se token è scaduto oppure non è più valido
            return res.status(403).send(err) 
        }
        req.user = user;

        next();
    })
}

module.exports = authenticateWithJWT;