const searchForm = document.querySelector("form#pokemon-search")

searchForm.addEventListener("submit", event => {
    event.preventDefault()

    
    const pokemonName = searchForm.elements.pokemon.value.toLowerCase()
    console.log("The user searched for:", pokemonName)
    
    //Example: Get https://pokeapi.co/api/v2/pokemon/articuno
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then(response => response.json())
        .then(pokemon => console.log(pokemon.sprites.front_default))
})