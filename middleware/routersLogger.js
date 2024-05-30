// Definisco un middleware per ogni registrare ogni richiesta HTTP ricevuta
const routersLogger = (req, res, next) => {
    console.log(`New request: ${req.method} | ${req.baseUrl}${req.url}`);
    next();
}

module.exports = routersLogger;