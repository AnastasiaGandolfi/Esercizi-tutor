let array = [1,2,3,4];
[a,b] = [...array];
console.log(a);
console.log(b);

const person ={
    "name": "John",
    "age": 30,
    "city": "New York"
}

const {name, age, city} = person;

function isAdult({age}){
    return age >= 18;
}

console.log(isAdult(person));

function somma(type, ...numbers){
    console.log(type)
    return numbers.reduce((a,b) => a+b);
}

console.log(somma(1,2,3,4,5,6,7,8,9,10))