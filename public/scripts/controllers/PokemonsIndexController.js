angular
  .module('pokemonApp')
  .controller('PokemonsIndexController', PokemonsIndexController);

PokemonsIndexController.$inject = ['$http'];
function PokemonsIndexController ($http) {
  var vm = this;


  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemons = response.data.pokemons;  // responsee is object/data/array of pokemons/object of individual pokemons
    console.log("response to GET in PoemonsIndexController");
    console.log(response);
  }, function errorCallback(err) {
    console.log('There was an error getting the data', err);
  });

  // vm.createPokemon = function () {
  //   $http({
  //     method: 'POST',
  //     url: '/api/pokemon',
  //     data: vm.newPokemon,
  //   }).then(function successCallback(response) {
  //     vm.newPokemon.push(response.data);
  //   }, function errorCallback(response) {
  //     console.log('There was an error posting the data', response);
  //   });
  // }

//   vm.editPokemon = function (pokemon) {
//     $http({
//       method: 'PUT',
//       url: '/api/pokemon'+pokemon._id,
//       data: pokemon
//     }).then(function successCallback(json) {
//       // don't need to do anything!
//     }, function errorCallback(response) {
//       console.log('There was an error editing the data', response);
//     });
//   }
//
//   vm.deletePokemon = function (pokemon) {
//     $http({
//       method: 'DELETE',
//       url: '/api/pokemon'+ pokemon._id
//     }).then(function successCallback(json) {
//       var index = vm.newPokemon.indexOf(pokemon);
//       vm.newPokemon.splice(index,1)
//     }, function errorCallback(response) {
//       console.log('There was an error deleting the data', response);
//     });
//   }
//
}
