console.log('working app');

// if remember right,  ['ngRoute'] creates new module.  shouldn't be here, or website won't work
angular
  .module('pokemonApp', ['ngRoute'])
  .config(config)

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
        controller: 'PokemonsController'
      })
    .otherwise({
      redirectTo: '/'
    });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}   //  function config ($routeProvider
