/* 
List of pokemon and details about them
*/
let pokemonRepository = (function () {

    let repository = [
        { ID: "1", name: "Machop", height: 0.8, type: ["Fighting"] },
        { ID: "2", name: "Weedle", height: 0.3, type: ["Bug", "Poison"] },
        { ID: "3", name: "Poliwag", height: 0.3, type: ["Water"] },
    ]

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }
    function getAll() {
        return repository;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', (event) => showDetails(pokemon));
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());

/* For loop

function printArrayDetails() {
    for (let i = 0; i < pokemonList.length; i++) 
        {
        if (pokemonList[i].height > 0.5) {
            document.write(pokemonList[i].name + " - height = " + pokemonList[i].height + " Wow! that's taller than most pokemon" + "<br>");
        } else if (pokemonList[i].height < 0.5) {
            document.write(pokemonList[i].name + " - height = " + pokemonList[i].height + " Oh no... That's very small" + "<br>");
        }
    }
}
*/

/* forEach loop begins */
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
