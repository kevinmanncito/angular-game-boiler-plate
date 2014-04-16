angular.module('game', [
  'ui.router'
])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/partial-home.html',
      controller: 'homeCtrl'
    })
    .state('credits', {
      url: '/credits',
      templateUrl: 'app/credits/partial-credits.html',
      controller: 'creditCtrl'
    })
    .state('scores', {
      url: '/scores',
      templateUrl: 'app/scores/partial-score.html',
      controller: 'scoreCtrl'
    })
    .state('game', {
      url: '/game',
      templateUrl: 'app/game/partial-game.html',
      controller: 'gameCtrl'
    })

}])
