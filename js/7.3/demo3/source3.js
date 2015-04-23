var people = [
	{pnr: "9203013215", name: "Jonathan"},
	{pnr: "9211104816", name: "Niklas"}
];

var app = angular.module("TestApp", ["ngRoute"]);
app.config(["$routeProvider", function($routeProvider){
	$routeProvider.when("/person", {
		templateUrl: "people.html",
		controller: "PersonListCtrl"
	});

	$routeProvider.when("/person/:pnr", {
		templateUrl: "person.html",
		controller: "PersonCtrl"
	});

	$routeProvider.otherwise({
		redirectTo: "/person"
	});
}]);

app.controller("PersonCtrl", ["$scope", "$routeParams", 
	                         function($scope, $routeParams){
	var pnr = $routeParams.pnr;

	console.log($routeParams.pnr);

	for(var i in people) {
		if(people[i].pnr === pnr) {
			$scope.person = people[i];
		}
	}
}]);

app.controller("PersonListCtrl", ["$scope", function($scope){
	$scope.people = people;
	
	$scope.getRoute = function(pnr) {
		return "#/person/"+pnr;
	};
}]);