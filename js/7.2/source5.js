var app = angular.module("testApp", []);
app.controller("MainCtrl", ["$scope", function($scope){
	$scope.input = "";
	$scope.people = [
		{name: "Jonathan", mood:"happy"},
		{name: "Niklas", mood:"angulary"}
	];

	$scope.remove = function(i) {
		$scope.people.splice(i, 1);
	};

	$scope.add = function() {
		$scope.people.push({
			name: $scope.input,
			mood: "sleepy"
		});
	};
}]);