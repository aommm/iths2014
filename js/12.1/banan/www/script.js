var myApp = angular.module('myApp', []);
myApp.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.x = 5;
	$scope.buttonClicked = function() {
		navigator.notification.beep();
		navigator.notification.alert("Your OS is"+ device.platform);
		$scope.x = $scope.x + 1;
	}
    console.log(device);


}])

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	var el = document.getElementById('myApp');
	angular.bootstrap(el, ['myApp']);
}


