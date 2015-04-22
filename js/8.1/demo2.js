var app = angular.module('formValidation', []);
app.controller('FormCtrl', ['$scope', function($scope) {
  
  $scope.submitForm = function(event) {
  	if ($scope.myForm.$valid) {
		console.log("valid!");
  	} else {
  		console.log("invalid!");
  		event.preventDefault();
  	}
  }

}]);
