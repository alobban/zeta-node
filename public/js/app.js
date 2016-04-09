angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			})
			.state('history', {
				url: '/history',
				templateUrl: 'templates/history.html'
			})
			.state('members', {
				url: '/members',
				templateUrl: 'templates/members.html'
			})
			.state('events', {
				url: '/events',
				templateUrl: 'templates/events.html'
			})
			.state('recruitment', {
				url: '/recruitment',
				templateUrl: 'templates/recruitment.html'
			});
	}]);