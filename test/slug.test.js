// Importo Jest
const { test, expect } = require("@jest/globals");

const createSlug = (str) => {

    const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

    if (!posts) {
        throw new Error('Array degli slug non trovato');
    }

    if (regex.test(str) || str.trim() === '') {
        throw new Error('La stringa non deve contenere caratteri speciali o non deve essere vuota');
    }

    const slugBase = str.toLowerCase().replaceAll(' ', '-').trim();

    let slug = slugBase;

    let counter = 1;

    while(posts.includes(slug)) {
        slug = `${slugBase}-${counter}`;

        counter++;
    }

    posts.push(slug);

    return slug;

} 

// Resetto l'array slugs prima di ogni test
beforeEach(() => {
    posts = [];
});


// createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {

    const slug = createSlug('ciao');

    expect(typeof slug).toBe('string');

})

// createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    
    const slug = createSlug('Ciao');

    expect(slug).toEqual('ciao');
})

// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {

    const slug = createSlug('Hello World');

    expect(slug).toBe('hello-world');
})

// createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    const slug1 = createSlug('Hello World');

    const slug2 = createSlug('Hello World');

    expect(slug2).toBe('hello-world-1');
})

// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {

    expect(() => createSlug('Hell@ World')).toThrow();

    expect(() => createSlug('')).toThrow();
})

// createSlug dovrebbe lanciare un errore se manca l'array dei post
test('createSlug dovrebbe lanciare un errore se manca l\'array dei post', () => {

    posts = undefined;

    expect(() => createSlug('ciao')).toThrow();
})