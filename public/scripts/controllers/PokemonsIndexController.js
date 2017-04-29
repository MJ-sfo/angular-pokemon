angular
  .module('pokemonApp')
  .controller('pokemonsShowController', pokemonsShowController);

pokemonsShowController.$inject = ['$http', '$routeParams'];
// pokemonsShowController.$inject=['$http', '$routeParams', '$location'];
function pokemonsShowController ($http, $routeParams) {
// function pokemonsShowController($http, $routeParams, $location) {
  var vm = this;
  var pokemonId = $routeParams.id;
  // var pokemonId = $route.current.params;
  console.log("pokemonId is : ", pokemonId);
// console.log("vm on indiv page is: ", vm);
// console.log(vm.poki.pokemons);
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon/'+ pokemonId

  }).then(function successCallback(response, onError) {
  // vm.poki = response.data;
  vm.test = "sanity check for vm";
  console.log('response is: ', response);
    // vm.pokemons = response.data;  // responsee is object/data/array of pokemons/object of individual pokemons
    console.log("response to GET in pokemonsShowController");
    console.log('here\'s the data for pokemon', pokemonId, ':', response.data);
  }, function errorCallback(onError) {
    console.log('There was an error getting the data', onError);
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
