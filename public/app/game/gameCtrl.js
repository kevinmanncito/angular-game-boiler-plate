angular.module('game')

.controller('gameCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.title = 'Choose a game type';

  $scope.lastTimeStamp = performance.now();
  // CANVAS ELEMENTS
  $scope.canvas = document.getElementById('canvas');
  $scope.context = $scope.canvas.getContext('2d');


  gameLoop = function(time) {
    elapsedTime = (time - $scope.lastTimeStamp) /1000;
    $scope.lastTimeStamp = time;

    Updater.update($scope, elapsedTime);
    Renderer.render($scope);
    
    requestAnimationFrame(gameLoop);
  }
  
  // requestAnimationFrame(gameLoop);

}]);
