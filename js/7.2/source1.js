var app = angular.module("testApp", []);
app.controller("MainCtrl", ["$scope", function($scope){
	$scope.x = "working";
}]);