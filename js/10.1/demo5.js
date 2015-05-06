var app = angular.module('myModule', []);

// Create a factory function which returns a filter
app.filter('currency', function() {
	return function(amount, symbol, symbolAtEnd) {
		amount = Number(amount);
		var wholeAmount = Math.trunc(amount);
		if (wholeAmount === amount) {
			var end = ".00"
		} else {
			var end = ""
		}
		if (symbolAtEnd) {
			return amount+end+" "+symbol;
		} else {
			return symbol+amount+end;
		}
		
	}
})

app.controller('FilterCtrl', ['$scope', function($scope) {
	$scope.x = 5;	
	$scope.symbol = "$";	
}]);
