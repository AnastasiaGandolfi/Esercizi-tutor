async function retriveDog(){
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    let json = await res.json()
    console.log(json)
}
/* retriveDog()
.then(val => console.log(val))
.catch(err => console.log(err)) */

/* async function showData(){
    console.log(await retriveDog())
}
showData() */

retriveDog()