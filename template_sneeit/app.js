angular.module('MyApp', ['ngRoute', 'ui.router'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.otherwise({
			templateUrl: 'main.html',
			controller: 'MainCtrl'
		});

		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: true
		});

	})
	.controller('MainCtrl', function($scope) {
		baseURL = '/projects/template_sneeit'
		$scope.routes = [	baseURL + '/route-1', 
							baseURL + '/route-2', 
							baseURL + '/route-3'];
	});