/* class Developer{
    constructor (name, age, job){
        this.name = name
        this.age = age
        this.job = job
    }

    getInfo(){
        return this
    }
}

let developer = new Developer("gianni", "rizzo", "full stack developer")
console.log(developer.getInfo()) */

/* let num = "c"
const prom = new Promise((resolve, reject) => {
    !isNaN(num) ? resolve("It is a number") : reject("It is not a number")
})

prom
    .then((val) => console.log(val))
    .catch((err) => console.error(err)) */

const btn = document.getElementById("login")
const div = document.getElementById("div")


btn.addEventListener("click", async (e) => {

    let p = document.createElement("p")
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email.length <= 0 || password.length <= 0) {

        p.innerHTML = "Tutti i campi sono obbligatori"


    } else {
        e.preventDefault()
        let res = await fetch("users.json")
        let json = await res.json()

        let isLogged = false

        json.forEach(user => {
            if (user.email === email && user.password === password) {
                isLogged = true
            }
        });

        p.innerHTML = isLogged ? "Logged" : "Not Logged!"

        div.appendChild(p)
    }
})