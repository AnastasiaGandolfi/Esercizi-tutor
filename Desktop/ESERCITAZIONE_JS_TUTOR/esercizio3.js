// class Person {
//     #name
//     #lastname
//     #age
//     #nationality
//     constructor(name, lastname, age, nationality) {
//         this.#name = name
//         this.#lastname = lastname
//         this.#age = age
//         this.#nationality = nationality
//     }
//     info() {
//         return {
//             name: this.#name,
//             lastname: this.#lastname
//             age: this.#age
//             nationality: this.#nationality
//         }
//     }
// }

// class Developer extends Person {
//     constructor(name, lastname, age, nationality, role) {
//         super(name, lastname, age, nationality)
//         this.#role = role
//     }
// }

// person = new Person("Roberta", "Federico", "29", "IT")

//ESERCIZIO 
class MyArray extends Array {
  constructor() {
    super();
  }
  sum() {
    return this.reduce((a, b) => {
      return a + b;
    });
  }
}

const nn = new MyArray();

nn.push(2, 4, 6, 7);

console.log(nn.sum());