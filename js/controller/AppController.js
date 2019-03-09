app.controller('AppController', ['$scope','$location',function(Scope,$location){
	console.log("hello world");
	Scope.login = function(){
		localStorage.clear();
		$location.path("/login");
	}
}]); 