console.log('Sanity Check: JS is working!');

$(document).ready(function() {
  function allPokes() {
    fetch('http://mutably.herokuapp.com/pokemon')
      .then(response => response.json())
      .then(res => {
        console.log();
        const pokeNodes = [];
        res.pokemon.forEach(pokemon => {
          pokeNodes.push(
            $(`
          <li><img src="${pokemon.image}"></li>
          <li>${pokemon.name}</li>
          <button class='get-book' id=${pokemon._id}>Details</button>
          <button class='delete-book' id=D${pokemon._id}>Delete</button>`)
          );
        });
        console.log(pokeNodes);
        $('.list-group').empty();
        pokeNodes.forEach(node => {
          $('.list-group').append(node);
        });
        // $('.get-poke').on('click', getPoke)
        $('.delete-poke').on('click', function() {
          console.log('Deleting this poke!');
          let pokemonID = deletePoke;
        });
      });
  }

  allPokes();
});

function deletePoke(pokemonID) {
  $.ajax({
    url: `http://mutably.herokuapp.com/pokemon/${pokemonID}`,
    type: 'GET'
  })
    .done(function(results) {
      console.log('These are the results: ', results);
    })
    .fail(function(xhr) {
      console.log('Error, Will Robinson!', xhr);
    });
}
