// Importo Jest
const { test, expect } = require("@jest/globals");

const createSlug = (str) => {

    return str.toLowerCase().replaceAll(' ', '-');
} 

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
    
})