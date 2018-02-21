var cooking = require('../pages/cooking');
var cookingpage = new cooking();
var commonutils = require('../../testconfig/commonutils.js');

describe('NYTimes Cooking HomePage tests', function() {
  //define variables to generate two random numbers to keep email and password random. To be used later.
  var randomEmailNum = Math.floor(Math.random() * 100) + 1900;
  var randomPassNum = Math.floor(Math.random() * 899) + 100;
  
  beforeEach(function() {
	browser.ignoreSynchronization = true;
	browser.driver.manage().window().maximize();
	//load the webpage
    browser.driver.get(commonutils.pages.cookinghomepage);
  });
  
  it('should sign up a customer and verify if he/she is signed is', function() {
	//Sign up by entering email and password. Helps create random test customers.
    cookingpage.loginLink.click();
	cookingpage.signUpLink.click();
	cookingpage.signUpInputs.get(0).sendKeys("reader" + randomEmailNum + "@gmail.com");
	cookingpage.signUpInputs.get(1).sendKeys("Str" + randomPassNum);
	cookingpage.signUpInputs.get(2).sendKeys("Str" + randomPassNum);
	cookingpage.createAccountButton.click();
	browser.driver.sleep(1000);
	//Checking if the pop up appears.
	cookingpage.continueToNytButton.isPresent().then(function(result) {
    if(result) {
        cookingpage.continueToNytButton.click();
    } else {
        //do nothing
    }
	});
	browser.driver.sleep(1000);
	
	//verify homepage is loaded
	expect(cookingpage.cookingLogo.isPresent()).toBe(true);
	expect(cookingpage.homepageSearchInput.getAttribute('placeholder')).toBe("What would you like to cook?");
	expect(cookingpage.recipeBoxLink.getText()).toBe("YOUR RECIPE BOX");
	expect(cookingpage.subscribeLink.getText()).toBe("FREE TRIAL");
	expect(cookingpage.homepageHdr.getText()).toBe("What to Cook This Week");
	
	//verify the user is signed in
	expect(cookingpage.homePageActName.getText()).toBe("reader" + randomEmailNum);
	
	//verify the user can log out
	cookingpage.subscribeLink.click();
	cookingpage.accountOptions.get(4).click();
	
  });
  
  it('should login the customer and verify he/she can save a recipe', function() {
	//login
	cookingpage.loginLink.click();
	cookingpage.signUpInputs.get(0).sendKeys("reader" + randomEmailNum + "@gmail.com");
	cookingpage.signUpInputs.get(1).sendKeys("Str" + randomPassNum);
	cookingpage.loginButton.click();
	browser.driver.sleep(1000);
	
	//Checking if the pop up appears.
	cookingpage.continueToNytButton.isPresent().then(function(result) {
    if(result) {
        cookingpage.continueToNytButton.click();
    } else {
        //do nothing
    }
	});
	
	//Verify top carousel recipes are present
	browser.executeScript('arguments[0].scrollIntoView()',cookingpage.homepageHdr.getWebElement());
	for(var i=0; i<4; i++)
		expect(cookingpage.homepageTopCarRecipies.get(i).isPresent()).toBe(true);
	expect(cookingpage.homepageCarScrolls.get(0).isPresent()).toBe(true);
	
	//Verify a recipe can be saved by clicking on save
	cookingpage.saveRecipeButton.get(0).click();
	//verify the recipe box
	cookingpage.homePageActName.click();
	expect(cookingpage.savedRecipeLeftPane.get(1).getText()).toBe("Saved Recipes");
	expect(cookingpage.savedRecipesCount.get(2).getText()).toBe('1');
	expect(cookingpage.savedRecipesHdr.getText()).toBe("Saved Recipes");
	expect(cookingpage.savedRecipes.get(0).isPresent()).toBe(true);
	
	//log out the customer
	cookingpage.subscribeLink.click();
	cookingpage.accountOptions.get(4).click();
  });
  
  it('should login the customer and verify that the API for unsaving a recipe works', function() {
	//login
	cookingpage.loginLink.click();
	cookingpage.loginInputs.get(0).sendKeys("reader" + randomEmailNum + "@gmail.com");
	cookingpage.loginInputs.get(1).sendKeys("Str" + randomPassNum);
	cookingpage.loginButton.click();
	browser.driver.sleep(500);
	
	//Checking if the pop up appears.
	cookingpage.continueToNytButton.isPresent().then(function(result) {
    if(result) {
        cookingpage.continueToNytButton.click();
    } else {
        //do nothing
    }
	});
	
	//Gather information needed for the API
	browser.executeScript('arguments[0].scrollIntoView()',cookingpage.homepageHdr.getWebElement());
	//getting the user id
	function getUserId() {
        return bootstrap.initialState.user.id;
    }
	//getting user Agent
	function getUserAgent() {
        return navigator.userAgent;
    }
	
	//Extract values for all request params
	/** first is the recipe ID,
	second the cookie NYT-S,
	third the userId from above,
	last is the user agent info from above
	*/
	Promise.all([
		cookingpage.recipeId.get(0).getAttribute('data-id'),
        browser.driver.manage().getCookie('NYT-S'),
        browser.executeScript(getUserId),
        browser.executeScript(getUserAgent),
        ]).then(function(values){
			commonUtils.deleteRecipe(values[0], values[1].name + '=' + values[1].value, values[2], values[3]);
        });
	browser.driver.sleep(500);
		
	//Verify that the recipe is deleted.
	expect(cookingpage.savedRecipesCount.get(2).getText()).toBe('0');
	expect(cookingpage.savedRecipes.get(0).isPresent()).toBe(false);
	
	//log out the customer
	cookingpage.subscribeLink.click();
	cookingpage.accountOptions.get(4).click();
  });
});