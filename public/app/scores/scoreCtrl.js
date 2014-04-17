angular.module('game')

  .controller('scoreCtrl', [
      '$scope', 
      'Scores', 
    function(
      $scope, 
      Scores
  ) {
    
    $scope.scores = Scores.get();

    $scope.title = 'High Scores';

  }]);