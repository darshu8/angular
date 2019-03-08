var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	 .when( '/main', {
	    template: 'Welcome User!'
	    //templateUrl: 'login.html'
	  })
	  .when('/login', {
		  templateUrl: 'js/view/login.html'
	    //templateUrl: 'dashboard.html'
	  })
	   .when('/home', {
		  templateUrl: 'js/view/home.html'
	    //templateUrl: 'dashboard.html'
	  })
	  .otherwise({ // <-- you were missing "." here.
	    redirectTo: '/js/view/error.html'
	  });
	});

app.run(function($location){
	// Very first thing when angular js project is run
	console.log($location.path())
	console.log("i am in run");
})