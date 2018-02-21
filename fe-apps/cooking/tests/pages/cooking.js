'use strict';

var cooking = function() {
};

cooking.prototype = Object.create({}, {
	
	loginLink: {
		get:function() {
			return element(by.css('.nytc---loginbtn---navSubLabel'));
		}
	},

	signUpLink: {
		get:function() {
			return element(by.css('.nytc---regimodal---tabButton'));
		}
	},

	signUpInputs: {
		get:function() {
			return element.all(by.css('.nytc---regimodal---regiInput'));
		}
	},

	createAccountButton: {
		get:function() {
			return element(by.css('.nytc---buttonstyles---redCTA'));
		}
	},
	
	loginButton: {
		get:function() {
			return element(by.css('.nytc---buttonstyles---redCTA'));
		}
	},
	
	secureLoginMsg: {
		get:function() {
			return element.all(by.css('.Form__formHolder___rRqS3 .Form__notification___28mi4'));
		}
	},
	
	secureLoginPassword: {
		get:function() {
			return element.all(by.css('.Input__inputBox___2Dkss'));
		}
	},
	
	secureLoginButton: {
		get:function() {
			return element.all(by.css('.Button__buttonBox___2xI4s.Button__primary___Zx1vy'));
		}
	},
	
	continueToNytButton: {
		get:function() {
			return element(by.css('.nytc---buttonstyles---redCTA'));
		}
	},

	homePageActName: {
		get:function() {
			return element(by.css('.nytc---loginbtn---navSubLabel'));
		}
	},

	cookingLogo: {
		get:function() {
			return element(by.css('.nytc---sitelogo---logo'));
		}
	},

	homepageSearchInput: {
		get:function() {
			return element(by.css('.nytc---sitesearchbar---searchInput'));
		}
	},

	recipeBoxLink: {
		get:function() {
			return element(by.css('.nytc---loginbtn---loginBtn > a'));
		}
	},

	subscribeLink: {
		get:function() {
			return element(by.css('.nytc---subscribenavbtn---navLabel > div'));
		}
	},
	
	accountOptions: {
		get:function() {
			return element.all(by.css('a.nytc---signuppopover---destinationLink'));
		}
	},

	homepageHdr: {
		get:function() {
			return element(by.css('#what-to-cook a'));
		}
	},
	
	homepageTopCarRecipies: {
		get:function() {
			return element.all(by.css('article.card.recipe-card'));
		}
	},
	
	homepageCarScrolls: {
		get:function() {
			return element.all(by.css('.collection-carousel-wrap .owl-next'));
		}
	},
	
	saveRecipeButton: {
		get:function() {
			return element.all(by.css('.control-save-btn'));
		}
	},
	
	savedRecipeLeftPane: {
		get:function() {
			return element.all(by.css('span.nytc---listitem---name'));
		}
	},
	
	savedRecipesCount: {
		get:function() {
			return element.all(by.css('span.nytc---listitem---count'));
		}
	},
	
	savedRecipesHdr: {
		get:function() {
			return element(by.css('.nytc---breadcrumbs---breadcrumbContainer a'));
		}
	},
	
	savedRecipes: {
		get:function() {
			return element.all(by.css('.nytc---cardbase---dragCard'));
		}
	},
	
	homepageRecipeData: {
		get:function() {
			return element.all(by.css('div.card-data-wrapper'));
		}
	},
	
	recipeBox: {
		get:function() {
			return element(by.css("a.nytc---navbtn---login-child"));
		}
	},

	loginInputs: {
		get:function() {
			return element.all(by.css("input.nytc---regimodal---regiInput"));
		}
	},

	recipeId: {
		get:function() {
			return element.all(by.css("article.card.recipe-card"));
		}
	},
});

module.exports = cooking;	