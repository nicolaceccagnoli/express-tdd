// Importo Jest
const { test, expect } = require("@jest/globals");

// Definisco un array per gli slugs
let slugs = [];

const createSlug = (str) => {

    const slugBase = str.toLowerCase().replaceAll(' ', '-');

    let counter = 1;

    let slug = slugBase;

    while(slugs.includes(slug)) {
        slug = `${slugBase}-${counter}`;

        counter++;
    }

    slugs.push(slug);

    return slug;

} 

// Resetto l'array slugs prima di ogni test
beforeEach(() => {
    slugs = [];
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