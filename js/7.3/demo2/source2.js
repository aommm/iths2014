var app = angular.module("TestApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
	$routeProvider.when("/", {
		redirectTo: "/space"
	});

	$routeProvider.when("/space", {
		templateUrl: "space.html"
	});

	$routeProvider.when("/eat", {
		templateUrl: "eat.html",
		controller: "JokeCtrl"
	});

	$routeProvider.when("/recipes", {
		templateUrl: "recipes.html"
	});

	$routeProvider.otherwise({
		redirectTo: "/"
	});
}]);

app.controller("JokeCtrl", ["$scope", function($scope){
	$scope.joke = "Två tomater etc.";
}]);
