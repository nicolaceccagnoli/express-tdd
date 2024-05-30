// Importo Jest
const { test, expect } = require('@jest/globals');

// Importo il modulo fs
const fs = require('fs');

// Definisco un istanza di Model
class Model {

    constructor(fileName) {
        if (typeof fileName !== 'string' || !fileName.endsWith('.json')) {
            throw new Error('Il file deve essere di tipo json');
        }
        this.fileName = fileName;
        // Inizializzo una proprietà per il contenuto del file
        this.data = null;
    }

    read() {
        try {
            // Converto il contenuto del file in un oggetto JS
            this.data = require(this.fileName);
        } catch (error) {
            throw new Error('Impossibile leggere il file');
        }
    }

    add(newData) {
        try {
            // Leggo il contenuto del file
            const fileData = fs.readFileSync(this.fileName);

            // Converto il contenuto del file in un oggetto JS
            const data = JSON.parse(fileData);

            // Aggiungo i nuovi dati all'array
            data.push(newData);

            // Converto l'oggetto JS in un JSON
            const newDataString = JSON.stringify(data);

            // Scrivo nel file
            fs.writeFileSync(this.fileName, newDataString);

        } catch (error) {
            throw new Error('Impossibili aggiungere dati al file');
        }
    }
}

// Model dovrebbe essere una classe (crea un'istanza della classe Model)
test('Model dovrebbe essere una classe (crea un\'istanza della classe Model)', () => {
    const model = new Model('./example.json');

    expect(model).toBeInstanceOf(Model);
})

// L'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza
test('L\'istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell\'istanza', () => {
    const fileName = 'example.txt';

    expect(() => new Model(fileName)).toThrow();
})

// L'istanza di model dovrebbe avere il metodo read
test('L\'istanza di model dovrebbe avere il metodo read', () => {
    const model = new Model('./example.json');

    expect(model).toHaveProperty('read');
})

// L'istanza di model dovrebbe avere il metodo add
test('L\'istanza di model dovrebbe avere il metodo add', () => {
    const model = new Model('./example.json');

    expect(model).toHaveProperty('add');
})

// read dovrebbe ritornare un array
test('read dovrebbe ritornare un array', () => {
    const model = new Model('./example.json');

    model.read();

    expect(Array.isArray(model.data)).toBe(true);
})

