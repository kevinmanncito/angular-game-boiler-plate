angular.module('game')

  .factory('Scores', ['$http', function($http) {
    function get() {
      return 'Score!';
    }
    return {
      get : get
    }
  }]);