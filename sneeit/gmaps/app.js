function onGoogleReady() {
	angular.bootstrap(document.getElementsByTagName('body')[0], ['MyApp']);
}

angular.module('MyApp', ['ui.map'])
	.controller('MainCtrl', function($scope){
		$scope.mapOptions = {
			center: new google.maps.LatLng(25.197139, 55.274111),
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		$scope.addMarker = function(event, params) {
			new google.maps.Marker({
				map: $scope.MyMap,
				position: params[0].latLng
			});
		};
	});