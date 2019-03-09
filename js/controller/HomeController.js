app.controller('HomeController', ['$scope', 'Service', function(Scope, Service){
	Scope.progress = true;
	
	Service.getAlbum().then(function(response) {
		Scope.lists = response.data;
		Scope.progress = false;
	},
	function(err){
		Scope.err = err;
		Scope.progress = false;
		console.log(err);
	});
}]); 