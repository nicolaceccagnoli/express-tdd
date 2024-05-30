// Definisco un middleware per la definizione degli errori
const errorsFormatter = (err, req, res, next) => {
    // Definisco una costante per il tipo di errore da restituire
    const statusError = 500;
    res.format({
        html: () => res.status(statusError).send('Qualcosa è andato storto' + err.message),
        json: () => res.status(statusError).json({statusError, error: err.message, stack: err.stack})
    })
};

module.exports = errorsFormatter;