var app = angular.module("TestApp", []);

app.controller("MenuCtrl", ["$scope", function($scope){
	$scope.content = "space.html";

	$scope.changeContent = function(site) {
		$scope.content = site;
	}
}]);