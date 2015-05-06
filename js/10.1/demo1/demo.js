var app = angular.module('myApp', ['ngRoute', 'main', 'about']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
		templateUrl: 'main.html',
		controller: 'MainCtrl'
	});
	$routeProvider.when('/about', {
		templateUrl: 'about.html',
		controller: 'AboutCtrl'
	});

}]);

app.controller('MenuCtrl', ['$scope', function($scope) {
	$scope.nextPage = function() {
		console.log("ntex");
	}
}]);

