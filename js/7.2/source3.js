var app = angular.module("testApp", []);
app.controller("MainCtrl", ["$scope", function($scope){
	$scope.x = "";
	$scope.y = 55;
	$scope.double = function(e){
		console.log(e);
		e.target.innerText = "Tjabba";
		$scope.x = $scope.x + $scope.x;
	};
}]);