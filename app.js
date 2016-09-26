angular.module('flapperNews',[])
.controller('MainCtrl', ['$scope', function($scope) {
	$scope.posts = [
		{title: 'post 1', upvotes: 5},
		{title: 'post 2', upvotes: 13},
		{title: 'post 3', upvotes: 4},
		{title: 'post 4', upvotes: 20},
		{title: 'post 5', upvotes: 3}
	];
}]);