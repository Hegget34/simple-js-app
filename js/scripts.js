/*List of pokemon and details about them*/
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

/*Add pokemon name and description*/
    function add(pokemon) {
        pokemonList.push(pokemon);
    };

    function getAll() {
        return pokemonList;
    }

/* button for pokemon to list details when clicked on */
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function (event) {
            showDetails(pokemon);
        });
    }

/*Function to load pokemon list*/
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

/* details loading in from source */
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            /* Details added to the items */
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types.map((type) => type.type.name);
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            showModal(item);
        });
    }

/* model input starts here */
    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        let modalContainer = $('#modal-container');

        modalBody.empty();
        modalTitle.text(pokemon.name);

        let height = $('<p id="details" >' + 'Height:  ' + pokemon.height + '</p>');
        let image = $('<img id="pokemon-img" src="' + pokemon.imageUrl + '" />');
        let types = $('<p id="details" >' + 'Types:  ' + pokemon.types + '</p>');

        modalBody.append(image);
        modalBody.append(height);
        modalBody.append(types);

        modalContainer.show();
    }

/* hides modal */
    function hideModal() {
        let modalContainer = $('#modal-container');
        modalContainer.hide();
    } 

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hideModal();
        }
    });

    window.addEventListener("click", function (event) {
        hideModal();
        }
    );
    
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };
})();

/*forEach loop begins*/
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});