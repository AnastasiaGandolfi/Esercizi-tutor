// let numeri = [];

// for (i = 0; i <= 100; i++) {
//     numeri.push(i);
// }

// let pari = numeri.filter(item => item % 2 === 0);
// console.log(pari);

// let _pari = numeri.filter(trovapari);

// function trovapari(item) {
//     if (item % 2 === 0) {
//         return item
//     }
// }

// console.log(_pari);


let frutta = ['banana', 'mela', 'pera', 'melone'];

// frutta.forEach(function(item) {
//     console.log(item.length);
// })

let spesa = [];

frutta.map(item => {
    let oggetto = {
        nome: item,
        size: item.length,
    };
    spesa.push(oggetto);
});

console.log(spesa);

for (let item of spesa) {
    let key = Object.keys(item);
    console.log(key);

    let value = Object.values(item);
    console.log(value);

    let entry = Object.entries(item);
    console.log(entry);
}


