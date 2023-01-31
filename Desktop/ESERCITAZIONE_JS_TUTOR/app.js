class Person{
    static #name = ""
    static #lastname = ""
    static #age = 0
    static #nationality = ""
    constructor(name, lastname, age, nationality){
        Person.#name = name
        Person.#lastname = lastname
        Person.#age = age
        Person.#nationality = nationality
    }
    static getFullObj(){
        return {
            name: Person.#name,
            lastname: Person.#lastname,
            age: Person.#age,
            nationality: Person.#nationality
        }
    }
    get name(){
        return this.#name
    }
    get lastname(){
        return this.#lastname
    }
    get age(){
        return this.#age
    }
    get nationality(){
        return this.#nationality
    }
    set name(newVal){
        Person.#name = newVal
    }
    set lastname(newVal){
        this.#lastname = newVal
    }
    set age(newVal){
        this.#age = newVal
    }
    set nationality(newVal){
        this.#nationality = newVal
    }
}

class Developer extends Person{
    #role
    constructor(name, lastname, age, nationality, role){
        super(name, lastname, age, nationality)
        this.#role = role
    }
}

person = new Person("Matteo", "Spinelli", "21", "IT")
person.name = "Andrea"
console.log(Person.getFullObj())