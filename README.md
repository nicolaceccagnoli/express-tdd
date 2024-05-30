# express-tdd

Impariamo a ragionare in ottica TDD e a scrivere i nostri Unit Tests.
Creiamo i test per la nostra funzione createSlug che crea gli slug dei nostri post ricevendo come argomento il titolo da convertire e la lista di tutti i post.
Eseguiamo i seguenti test:
createSlug dovrebbe ritornare una stringa
createSlug dovrebbe ritornare una stringa in lowercase
createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
createSlug dovrebbe incrementare di 1 lo slug quando esiste già
createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
createSlug dovrebbe lanciare un errore se manca l'array dei post
Lavoriamo in ottica TDD, quindi prima scriviamo il singolo test, e dopo scriviamo il codice necessario per far superare il nostro test.
