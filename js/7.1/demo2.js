// Create our app module 'demo1'
var app = angular.module('demo1', []);

// Create a controller 'Demo1Ctrl' in the module,
// which has access to $scope, i.e. the model
app.controller('Demo1Ctrl', ['$scope', function($scope) {
  // This function is run when controller is instantiated

  // Store something in the model:
  $scope.x = 350;
  $scope.y = 4400;
}]);
