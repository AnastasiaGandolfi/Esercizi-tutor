let arrayPers = [];
class Persona {
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
}

function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

for (let i = 0; i < 10; i++) {
    let name = makeid(5);
    let cognome = makeid(10);
    let eta = getRandomInt(10, 30);
    let persona = new Persona(name, cognome, eta);
    arrayPers = [...arrayPers, persona];
}

console.log(arrayPers);

let maggiorenni = arrayPers.filter(item => item.eta >= 18)
console.log(maggiorenni);

