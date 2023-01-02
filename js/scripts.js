/* 
List of pokemon and details about them
*/

let pokemonList = [
    { ID: "1", name: "Machop", height: 0.8, type: ["Fighting"] },
    { ID: "2", name: "Weedle", height: 0.3, type: ["Bug", "Poison"] },
    { ID: "3", name: "Poliwag", height: 0.3, type: ["Water"] },
]

/* 
loop to list heights of pokemon
*/

for (let i = 0; i < pokemonList.length; i++) 
    {
    if (pokemonList[i].height > 0.5) {
        document.write(pokemonList[i].name + " - height = " + pokemonList[i].height + " Wow! that's taller than most pokemon" + "<br>");
    } else if (pokemonList[i].height < 0.5) {
        document.write(pokemonList[i].name + " - height = " + pokemonList[i].height + " Oh no... That's very small" + "<br>");
    }
}