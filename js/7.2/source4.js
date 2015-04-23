var app = angular.module("testApp", []);
app.controller("MainCtrl", ["$scope", function($scope){
	$scope.banana1 = "";
	$scope.apple3 = "";
	$scope.result = "";

	$scope.hej = function() {
		console.log("hej");
	}

	$scope.fruitSalad = function() {
		$scope.result = "Det finns "+fruitHelp($scope.banana1);
	};

	var fruitHelp = function(word) {
		var str = "";
		for(var i=1;i<word.length;i++) {
			str += word[i];
		}

		if(word === "") {
			return 0;
		}else if(word[0] === $scope.apple3) {
			return 1+fruitHelp(str);
		} else {
			return fruitHelp(str);
		}
	};
}]);