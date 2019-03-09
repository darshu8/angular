var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider,$httpProvider) {
	$routeProvider
		.when('/about', {
			templateUrl: 'js/view/about.html'
		})
		.when('/login', {
			templateUrl: 'js/view/login.html',
			controller: 'LoginController'
		})
		.when('/home', {
			templateUrl: 'js/view/home.html',
			controller: 'HomeController'
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
			return $q.reject(error);
		}
	}
});

app.factory('httpRequestInterceptor', function ($rootScope, $q, $location) {
	return {
		'request': function(config) {
			config.headers["x-rapidapi-key"] = "e7bb4c2a9dmsh38c4522ba220430p1707e4jsnacddb8a0af87";
			console.log(config);
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


app.run(function ($location,$rootScope) {
	// Very first thing when angular js project is run
	var path = $location.path();
	var user = JSON.parse(localStorage.getItem("user"));
	if(path.includes("login") && user){
		$rootScope.authroize = true;
		$location.path("/home");
	}
	else if(user){
		$rootScope.authroize = true;
		$location.path(path);
	}
	else{
		$rootScope.authroize = false;
		$location.path("/login");	
	}
	// if(path.include("login") && user ){
	// 	$location.path ="/home";
	// }
})