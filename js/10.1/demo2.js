var app = angular.module('myModule', []);

// Create a service which is a string (pass by value)
app.value('clientId', 'blablabla');

// Create a service which is an object (pass by reference)
app.value('client', {'name':'Niklas'});

app.controller('MyCtrl', ['$scope', 'clientId','client', function($scope, clientId, client) {
	console.log(clientId);
	console.log(client);
	$scope.clientId = clientId;
	$scope.client = client;
}]);

app.controller('MyCtrl2', ['$scope','clientId', 'client', function($scope, clientId, client) {
	console.log(clientId);
	console.log(client);
	$scope.client = client;
	$scope.clientId = clientId;
}]);



