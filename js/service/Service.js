app.factory('Service', ['$rootScope','$http',
function($rootScope,http) { 
    
    return {
        baseUrl: "https://musixmatchcom-musixmatch.p.rapidapi.com",
        getAlbum: function(){
			return http.get(this.baseUrl + "/wsr/1.1/album.get?album_id=13881272", {headers : {"x-rapidapi-key":"e7bb4c2a9dmsh38c4522ba220430p1707e4jsnacddb8a0af87","content-type":"application/json"}});
		},
    };

}]);
