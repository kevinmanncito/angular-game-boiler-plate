angular.module('game')

  .factory('Updater', [function() {
    
    function update($scope, elapsedTime) {
      console.log('updating')
    }

    return {
      update : update
    }
  }]);