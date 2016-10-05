	angular.module('MyApp', ['ui.codemirror', 'ui.ace'])
		.controller('MainCtrl', function($scope) {
			$scope.msg = 'hello angular ui';

			$scope.cmOpts = {
				lineNumbers: true,
				indentSize: 4,
				tabSize: 4,
				theme: 'solarized',
				mode: 'javascript'
			};

			$scope.aceOpts = {
				theme: 'twilight',
				mode: 'html'

			};
		});