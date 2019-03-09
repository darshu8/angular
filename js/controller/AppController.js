app.controller('AppController', ['$scope','$location','$rootScope',function(Scope, $location, RootScope){
	Scope.logout = function(){
		localStorage.clear();
		$location.path("/login");
		RootScope.authroize = false;
	}
}]); 