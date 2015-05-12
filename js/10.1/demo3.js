var app = angular.module('myModule', []);

// Create a service which is a string (pass by value)
app.value('clientId', 'blablabla');
// Create a service which is an object (pass by reference)
// app.value('client', {'name':'Niklas'});

// Factories are an alternate way of creating services, with more flexibility
app.factory('client', ['clientId', function(clientId) {
	console.log("factory");
	return {'id':clientId, 'name':'Niklas'};
}]);


app.controller('MyCtrl', ['$scope', 'client', function($scope, client) {
	console.log(client);
	$scope.client = client;
}]);

app.controller('MyCtrl2', ['$scope', 'client', function($scope, client) {
	console.log(client);
	$scope.client = client;
}]);
