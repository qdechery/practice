app.controller('meetupsCtrl', ['$scope', '$resource', 
	function($scope, $resource) {
		var Meetup = $resource('/api/meetups');

		Meetup.query(function(results) {
			$scope.meetups = results;
		});

		$scope.meetups = []

		$scope.createMeetup = function() {
			var meetup = new Meetup();
			meetup.name = $scope.meetupName;
			meetup.$save(function (results) {
				$scope.meetups.push(results);
				$scope.meetupName = "";
			});
			// $('#thanks').append("Thanks for the submission!");
		}
}]);