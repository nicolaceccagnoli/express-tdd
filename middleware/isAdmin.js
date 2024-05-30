// Importo il db degli utenti
const users = require("../db/users.json");

// Definisco un middleware per proteggere le rotte riservate agli Admin
const isAdmin = (req, res, next) => {
    // Estraggo le credenziali dell'utente dalla request del body
    const { id } = req.user;
    // Verifico che le credenziali inserite combacino con una di quelle degli utenti
    const user = users.find(u => u.id === id);
    
    // Se l'utente non esiste o non è Admin
    if (!user || !user.admin) {
        return res.status(403).send('Non hai l\'autorizzazione a procedere con la richiesta');
    }
    next();
}

module.exports = isAdmin;
