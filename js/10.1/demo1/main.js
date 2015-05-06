angular.module('main', [])
   .controller('MainCtrl', ['$scope', function($scope) {
       $scope.news = ['a', 'b', 'c'];
   }]);