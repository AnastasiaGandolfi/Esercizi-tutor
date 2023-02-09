//https://pokeapi.co/api/v2/pokemon/ditto
//https://pokeapi.co/api/v2/pokemon/

let pokemon = [];
fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(res => {
        for(let p of res.results){
            pokemon.push(p.name);
        }
        //console.log(pokemon);
        buildPokedex(pokemon);
    })

function buildPokedex(pokemons){
    let promises = [];
    for(let pokemon of pokemons){
        promises.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => res.json())
        )
    }
    let pokedex = [];
    Promise.all(promises)
        .then(res => {
            for(let i = 0; i < promises.length; i++){
                pokedex[pokemons[i]] = res[i].sprites.front_default;
            }
            console.log(pokedex);
        }).catch(error => console.error(error))
}