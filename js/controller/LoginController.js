app.controller('LoginController', ['$scope','$location',function(Scope,location){
	console.log("hello world");
	Scope.msg="hello from login";
	Scope.login = function(){
		var obj={};
		obj.username = Scope.username;
		obj.password = Scope.password;
		if(obj.username == "admin" && obj.password == "admin"){
			var user = JSON.stringify(obj);
			localStorage.setItem("user",user);
			location.path("/home");
		}
		else{
			Scope.errMsg="Invalid username/password";
		}		
	}
}]); 