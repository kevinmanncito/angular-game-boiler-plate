angular.module('game')

  .factory('Renderer', [function () {
    
    function render($scope) {
      console.log('rendering');
    }

    return {
      render : render
    }
  }]);