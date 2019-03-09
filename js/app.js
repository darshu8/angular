var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider,$httpProvider) {
	$routeProvider
		.when('/app', {
			templateUrl: 'js/view/app.html'
		})
		.when('/login', {
			templateUrl: 'js/view/login.html',
			controller: 'LoginController'
		})
		.when('/home', {
			templateUrl: 'js/view/home.html'
		})
		.otherwise({ // <-- you were missing "." here.
			redirectTo: '/login'
		});

	$httpProvider.interceptors.push([
		'$injector',
		function ($injector) {
			return $injector.get('AuthInterceptor');
		}
	]);

	$httpProvider.interceptors.push([
		'$injector',
		function ($injector) {
			return $injector.get('httpRequestInterceptor');
		}
	]);



});

app.factory('AuthInterceptor', function ($rootScope, $q, $location) {
	return {
		response: function (response) {

			return response;
		},
		responseError: function (error) {
			return $q.reject(response);
		}
	}
});

app.factory('httpRequestInterceptor', function ($rootScope, $q, $location) {
	return {
		'request': function(config) {
			return config;
		 },
		'requestError': function(rejection) { 
			return $q.reject(rejection);
		},
		'response': function(response) {
			return response;
		 },
		'responseError': function(rejection) { 
			return $q.reject(rejection);
		}
	}
});


app.run(function ($location) {
	// Very first thing when angular js project is run
	var path = $location.path();
	var user = JSON.parse(localStorage.getItem("user"));
	if(path.includes("login") && user){
		$location.path("/home");
	}
	else if(user){
		$location.path(path);
	}
	else{
		$location.path("/login");	
	}
	// if(path.include("login") && user ){
	// 	$location.path ="/home";
	// }
})