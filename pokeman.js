const main = document.querySelector("main")
const getRandomID = (maxId) => Math.floor(Math.random() * maxId + 1)
const searchForm = document.querySelector("form#pokemon-search")

searchForm.addEventListener("submit", searchFormHandler)

function searchFormHandler (event) {
        event.preventDefault()

        const pokemonName = searchForm.elements.pokemon.value.toLowerCase()
        console.log("The user searched for:", pokemonName)

        getPokemonData(pokemonName) //refactoring
}
  

function getPokemonData (pokemonName) {
    //Example: Get https://pokeapi.co/api/v2/pokemon/articuno
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then(response => response.json())
        .then(renderPokemon)
}
   
function renderPokemon (pokemon, parentElement = main) {
    const pokemonElement = document.createElement("article")
    pokemonElement.classList.add("pokemon-element")
    pokemonElement.dataset.pokemon = pokemon.name
    parentElement.append(pokemonElement)

    const sprite = document.createElement("img")
    sprite.src = pokemon.sprites.front_default
    pokemonElement.append(sprite)

    const title = document.createElement("h3")
    title.append(pokemon.name)
    pokemonElement.append(title)
}

