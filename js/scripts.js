/* 
List of pokemon and details about them
*/
let pokemonRepository = (function () {
    let pokemonList = [
        { ID: "1", name: "Machop", height: 0.8, type: ["Fighting"] },
        { ID: "2", name: "Weedle", height: 0.3, type: ["Bug", "Poison"] },
        { ID: "3", name: "Poliwag", height: 0.3, type: ["Water"] },
]

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

/* 
loop to list heights of pokemon
*/

/* printArrayDetails function declaration */
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
pokemonList.forEach(function (pokemon) {
    if (pokemonList[i].height > 0.5) {
        document.write(pokemonList[i].name + " - height = " + pokemonList[i].height + " Wow! that's taller than most pokemon" + "<br>");
    } else if (pokemonList[i].height < 0.5) {
        document.write(pokemonList[i].name + " - height = " + pokemonList[i].height + " Oh no... That's a very small pokemon" + "<br>");
    }
});

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(pokemonList.name + pokemonList.height);
});