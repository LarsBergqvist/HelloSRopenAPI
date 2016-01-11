var myApp = angular.module('myApp', []);

myApp.controller('SRChannelsController', ['$scope', '$http', function($scope, $http) {

  $scope.header = 'Radio channels on Sveriges Radio';
  $scope.filter = "Riks";
  
  $scope.filterChanged = function() {
    getChannelsInfo($scope.filter);
  };

  getChannelsInfo = function(filter) {
    var promise = $http.get("http://api.sr.se/api/v2/channels/?format=json&pagination=false&filter=channel.channeltype&filtervalue=" + filter);

    promise.then(function(response) {
      var channels = response.data.channels;
      $scope.channels = channels;
    });
  };
  
  getChannelsInfo($scope.filter);
  
}]);