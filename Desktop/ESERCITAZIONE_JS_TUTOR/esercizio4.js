let obj = {
    "firstName": "Roberta",
    "lastName" : "Federico",
    "age": 29
}

let { firstName, age} = obj; //destruttering
console.log(firstName);
console.log(age);

// function somma(...numeri){
//     return numeri.reduce((a,b) => a + b);
// }

// console.log(somma(2,4,5,8));

let str = JSON.stringify(obj);
console.log(str);

let jsonObj = JSON.parse(str);
console.log(jsonObj);

let stringa = "ciao ciccio piccio"; //da errore perchè JSON legge le proprietà con chiavi-valore quindi oggetti e array
console.log(JSON.parse(stringa));

class Person {
    constructor(name, lastname, birthday) {
      this.name = name;
      this.lastname = lastname;
      this.birthday = new Date(birthday);
    }
  
    toJSON() {
      const obj = {
        name: this.name,
        lastname: this.lastname,
        birthday: this.birthday,
      };
      return obj;
    }
  }
  
  const person = new Person("Mario", "Rossi", "10/12/1992");
  
  console.log(person.toJSON());
  
  let x = 1;
  
  function func() {
    let x = 2;
    function piero() {
      return x + 2;
    }
    return piero;
  }
  
  console.log(func()());