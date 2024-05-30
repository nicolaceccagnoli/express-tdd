// Importo il db degli utenti
const users = require("../db/users.json");

const { generateToken } = require("../utils");
 
// Funzione per la home
const login = (req, res) => {
    // Estraggo le credenziali dell'utente dalla request del body
    const { username, password} = req.body;
    // Trovo la corrispondenza tra le credenziali inserite e uno degli utenti
    const user = users.find(u => u.username === username && u.password === password);
    // Se non viene trovato l'utente
    if (!user) {
        // Restituisco un errore
        res.status(404).send('Credenziali errate');
    }

    const token = generateToken(user);

    res.send(token);
    
}

module.exports = {
    login
}