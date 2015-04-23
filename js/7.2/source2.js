var app = angular.module("testApp", []);
app.controller("MainCtrl", ["$scope", function($scope){
	console.log("Main");
	$scope.x = "";
}]);

app.controller("TestCtrl", ["$scope", function($scope){

}]);