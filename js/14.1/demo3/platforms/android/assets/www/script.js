var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {

	$scope.takePhoto = function () {
		console.log("taking a photo!");

		var cameraOptions = {
			quality: 75,
			correctOrientation: true,
			targetWidth:300,
			targetHeight:300,
			destinationType: Camera.DestinationType.FILE_URI
			// encodingType: Camera.EncodingType.JPEG
		};
		navigator.camera.getPicture( cameraSuccess, cameraError, cameraOptions);
		
		function cameraSuccess(tempImgPath) {
			// This is not an Angular function, so angular won't run a digest after this has executed!
			// We use $apply so that angular will check for $scope changes and propagate them
			$scope.$apply(function () {
				console.log("Img taken! path:",tempImgPath);
				$scope.photoSrc = tempImgPath;
				// $scope.photoSrc = "data:image/jpeg;base64,"+imgPath;
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

	$scope.moveToPermanent = function () {
		// If photo has been taken
		if ($scope.photoSrc) {
			var imgSrc = $scope.photoSrc;

			// Move to permanent directory (under the same name)
			moveFileToPicsDir(imgSrc, moveSuccess, moveError);
			function moveSuccess(file) {
				$scope.$apply(function() {
					console.log("changing img src")
					$scope.photoSrc = file.nativeURL;
				});
			}
			function moveError (err) {
				console.log("couldn't move file,",err);
			}

		}
	}

}]);

// Moves the given file to the {appData}/pics dir
// @param imgSrc: a uri to the image file we should move
function moveFileToPicsDir(imgSrc, success, error) {

	// Open the local storage dir (different on Android/iOS)
	window.resolveLocalFileSystemURL(getStorageUrl(), storageDirSuccess, error);
	function storageDirSuccess(storageDir) {
		console.log("Storage dir success!",storageDir);

		// Create a new directory for pics (if not already exists)
		storageDir.getDirectory('pics2', {create: true}, mkDirSuccess, error);
		function mkDirSuccess(picsDir) {
			console.log("Dir successfully created!", picsDir)

			// Get a FileEntry for our image
			window.resolveLocalFileSystemURL(imgSrc, fileSuccess, error);
			function fileSuccess(fileEntry) {
				console.log("File is ",fileEntry);

				// Move the file
				console.log("moving the file");
				fileEntry.moveTo(picsDir);
				// Get the new file (do not create, and throw error if doesn't exist)
				// Redirect to original callbacks 
				picsDir.getFile(fileEntry.name, {create: false, exclusive: true}, success, error);
			}
		}
	}
}

// Returns the root path where we should store our application data
function getStorageUrl() {
	return cordova.file.externalDataDirectory || cordova.file.dataDirectory;
}

// Bootstrap on deviceready
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	console.log("device ready, bootstrappin...")
	var el = document.getElementById('myApp');	
	angular.bootstrap(el, ['myApp'])
}
