# express-blog-auth

Creiamo le seguenti rotte:
home
posts/ (index)
posts/ (store)
posts/:slug (show)
Tramite JTW creiamo una rotta per autenticare un utente ed ottenere il Token JWT e tramite un middleware limitiamo l'accesso alla rota store dei post ai soli utenti loggati.
Gestiamo, attraverso dei middlewares, gli errori e le pagine 404.
Questi middleware dovranno rispondere con un json contente il codice ed il messaggio dell'errore.
Svolgiamo tutto l'esercizio tramite relativi controller e router.
