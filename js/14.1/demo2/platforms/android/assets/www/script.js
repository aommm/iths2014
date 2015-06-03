var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {

	$scope.takePhoto = function () {
		console.log("taking a photo!");

		var cameraOptions = {
			quality: 75,
			correctOrientation: true,
			saveToPhotoAlbum: true,
			targetWidth:300,
			targetHeight:300,
			destinationType: Camera.DestinationType.DATA_URL
			// encodingType: Camera.EncodingType.JPEG
		};
		navigator.camera.getPicture( cameraSuccess, cameraError, cameraOptions);
		
		function cameraSuccess(imgPath) {
			// This is not an Angular function, so angular won't run a digest after this has executed!
			// We use $apply so that angular will check for $scope changes and propagate them
			$scope.$apply(function () {
				console.log("Img taken! path:",imgPath);
				// $scope.photoSrc = imgPath;
				$scope.photoSrc = "data:image/jpeg;base64,"+imgPath;
			});
		}
		function cameraError(msg) {
			console.log("Error :(",msg);
		}

		// Example settings:
		// { quality: 50,
		//     destinationType: Camera.DestinationType.DATA_URL
		// }

	}

}]);

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	console.log("device ready, bootstrappin...")
	var el = document.getElementById('myApp');	
	angular.bootstrap(el, ['myApp'])
}
