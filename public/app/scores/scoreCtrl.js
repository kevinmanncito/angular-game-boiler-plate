angular.module('game')

.controller('scoreCtrl', ['$scope', 'Scores', function($scope, Scores) {
  
  $scope.scores = Scores.get();
  console.log($scope.scores);

  $scope.title = 'High Scores';

}]);