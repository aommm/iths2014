var app = angular.module('storyteller', []);

app.controller('StoryCtrl', ['$scope', function($scope) {
  // Store default values in the model:
  $scope.story1      = {};
  $scope.story1.name = "Noa";
  $scope.story1.noun = "arker";
}]);
