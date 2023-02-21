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

btn.addEventListener("click", async (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let res = await fetch("users.json")
    let json = await res.json()

    let isLogged = false

    json.forEach(user => {
        if (user.email === email && user.password === password ){
            isLogged = true
        }
    });
    isLogged ? console.log("Logged") : console.log("Not Logged!")
})