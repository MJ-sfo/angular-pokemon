console.log('app.js started');

// if remember right,  ['ngRoute'] creates new module.  shouldn't be here, or website won't work
angular
  .module('pokemonApp', ['ngRoute'])
    // .module('pokemonApp')
  .config(config)
  .controller('PokemonsIndexController', PokemonsIndexController);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config ($routeProvider, $locationProvider) {
    console.log('function working');
    $routeProvider
      .when('/', {
        templateUrl: '../../templates/pokemons/index.html',
        controllerAs: 'pokemonsIndexCtrl',
        controller: 'PokemonsIndexController'
      })
      .when('/pokemons/:id', {
        templateUrl: '../../templates/pokemons/show.html',
        controllerAs: 'pokemonsShowCtrl',
        controller: 'pokemonsShowController'
      })
    .otherwise({
      redirectTo: '/'
    });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}   //  function config ($routeProvider

  // inject $http into function PokemonsIndexController
PokemonsIndexController.$inject = ['$http'];
  function PokemonsIndexController ($http){
    var vm = this;
    // console.log('from PokemonsIndexController: ', PokemonsIndexController);

    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/pokemon'
    }).then(function successCallback(response) {
      // successCallback is first function - can be called anything
      vm.poki = response.data;
      // vm.test = "sanity check for vm";
      // console.log( vm.poki.pokemons);
    }, function errorCallback(response) {
      //  could call errorCallback - as long as second function
      console.log('There was an error getting the data', response);
    });
  }
