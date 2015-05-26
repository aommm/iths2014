var app = angular.module('myApp', []);
app.controller('MainCtrl', ['$scope', function ($scope) {
	console.log("MainCtrlz!");
	console.log(device);

	$scope.x = 6;

	$scope.buttonClicked = function () {
		console.log("button clicked!");
		console.log(device);
		navigator.notification.alert("Your device platform:"+device.platform);
	}

}]);

// document.addEventListener('deviceready', function () {
// 	console.log("readyy!");
// }, false);

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	console.log("device ready, bootstrappin...")
	var el = document.getElementById('myApp');	
	angular.bootstrap(el, ['myApp'])
}
