angular.module('QuoteServices',[])

.factory('RQFactory', function($http) {

  var getInspireQuotes = function() {
    return $http({
      method: 'GET',
      url: '/inspire',
    }).then(function(res) {
      return res;
    });
  };

  var getWisdomQuotes = function() {
    return $http({
      method: 'GET',
      url: '/wisdom',
    })
    .then(function(res) {
      console.log('this is res for wisdom quotes:', res);
      return res;
    });
  };

  var getLaughterQuotes = function() {
    console.log('inside laughter factory function');

  };


  return {
    getInspireQuotes: getInspireQuotes,
    getWisdomQuotes: getWisdomQuotes,
    getLaughterQuotes: getLaughterQuotes
  }

});