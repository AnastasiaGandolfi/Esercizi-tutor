// Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.
// If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.
// We write a second `promise` that takes a variable of type number as a parameter. 
//If the input parameter is greater than 0.5, in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.
// Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

//Starting from the previous exercise, try to better handle all errors through the Error class and the catch method. Also add the finally method.

const isLogged = true;

function checkIsLogged(isLogg){
    return new Promise((resolve, reject) =>{
        if(isLogg){
            resolve(Math.random());
        }else{
            reject(new Error("User not logged in"));
        }
    })
}

function getUserData(n){
    return new Promise((resolve, reject) =>{
        if(n > 0.5){
            resolve({name: "John", age: 24});
        }else{
            reject(new Error("User not found"))
        }
    })
}

checkIsLogged(isLogged)
    .then(getUserData)
    .then((userData) => console.log(userData))
    .catch(error => console.log(error))
    .finally(() => {
        console.log("Sempre");
    })