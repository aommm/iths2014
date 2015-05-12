var app = angular.module('myModule', ['messagesModule']);

app.controller('FormCtrl', ['$scope', 'messages',
	function($scope, messages) {
		$scope.addMessage = function(msg) {
			// messages.list.push(msg);
			messages.add(msg);
		};
}]);

app.controller('ListCtrl', ['$scope', 'messages',
	function($scope, messages) {
		$scope.msgs = messages.list;
	}
]);



