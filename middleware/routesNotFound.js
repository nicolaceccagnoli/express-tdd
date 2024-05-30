// Definisco un middleware per gestire le richieste HTTP non trovate
const routesNotFound = (req, res, next) => {
    const statusCode = 404;
    res.format({
        html: () => res.status(statusCode).send(`<h1> Pagina non trovata </h1>`),
        json: () => res.status(statusCode).json({
            statusCode,
            error: 'Pagina non trovata'
        })

    });
}

module.exports = routesNotFound;