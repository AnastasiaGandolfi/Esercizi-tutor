let numeri = []

for (i = 1 ; i <= 100; i++){
   
    /*if (i % 2 == 0){
   numeri.push(i);
    }*/
    
numeri.push(i)  
}

let pari = numeri.filter((item, index) => item % 2 == 0 )

console.log(pari);

let _pari = numeri.filter(trovapari)

function trovapari(item, index){
    if (item % 2 == 0){
        return item;
    }
}



console.log(_pari);