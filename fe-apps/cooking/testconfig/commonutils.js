//npm request module
var request = require('request');
var commonutils = function() {
	//define all base urls
	this.urls = {
		'cooking': 'https://cooking.nytimes.com',
	};
	//define all paths
	this.routes = {
		'homepage': '/',
		'unsaveapi': '/api/v2/users/',
	};	
	
	this.getCookingPage = function(page) {
		return (page == null)? '' : this.urls['cooking'] + this.routes[page];
	};	
	
	this.pages = {
		'cookinghomepage' : this.getCookingPage('homepage'),
	};
	
	//unsave api call
	this.deleteRecipe = function(recipeId, cookie, userId, userAgent) {
		var options = { method: 'DELETE',
        url: this.urls['cooking'] + this.routes['unsaveapi'] + userId + '/collectables/recipe/' + recipeId,
        headers:
            {'User-Agent': userAgent,
             'content-type': 'application/json',
             'Cookie': cookie,
             }
		};
        request(options, function (error, response, body) {
			if (error) throw new Error(error);
        });
	};
};
module.exports = new commonutils();