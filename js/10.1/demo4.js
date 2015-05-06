var app = angular.module('myModule', []);

// Factories are an alternate way of creating services, with more flexibility
app.factory('messages', [function() {
	console.log("factory");
	var messages = {};
	messages.list = [];
	messages.add = function(message) {
		this.list.push({id: this.list.length, message: message});
	};
	return messages;
}]);

app.controller('ListCtrl', ['$scope', 'messages', function($scope, messages) {
	$scope.messages = messages;
}]);

app.controller('FormCtrl', ['$scope', 'messages', function($scope, messages) {
	// Controller function
	this.add = function(message) {
		messages.add(message);
	}
}]);
