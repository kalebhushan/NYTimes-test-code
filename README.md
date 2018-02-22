# NYTimes-test-code
=====================

Purpose:
=========
This code has been written to test the NYTimes cooking app on the web platform using selenium webdriver and the protractor framework.

Introduction:
==============
Protractor is a end-to-end testing framework most commonly used for Angular JS apps but can also be used for non-angular apps. Its built on the Node.js platform. To run protractor, you need to have Node.js installed (select the npm package installer so you get exposure to a variety of reusable modules).
Protractor makes use of jasmine framework for its tests.
For more information visit http://www.protractortest.org.

Install:
========
1. Install Node.js using https://nodejs.org/en/download/
2. Make sure you select the npm package manager while installing Node.js
3. Install Protractor in the project directory using npm install -g protractor
4. This will also install a webdriver-manager which will aid in spinning up a selenium webdriver instance
5. Verify the install using commands node --version and protractor --version

Running Tests:
===============
1. Navigate to fe-apps/cooking directors on command line (or terminal) and spin up a selenium instance using webdriver-manager start
2. In another cmd or terminal window navigate to the fe-apps/cooking/testconfig directory and execute the command protractor protractor.conf
3. This will run all the spec files mentioned in the protractor config file.

Project directory structure:
=============================
1. The directory fe-apps/cooking contains all the code used by the automation tests.
2. The protractor config file is present in the directory fe-apps/cooking/testconfig. This directory also contains a utility file which contains commonly used information by the tests, like the url, the web api call.
3. The file fe-apps/cooking/pages/cooking.js contains all the css selectors that will be used by the test.
4. The actual test spec file is present at fe-apps/cooking/specs/login-it.js

Tests and Assumptions:
=======================
1. All three specs are included in the single spec file. The specs test registering a user, logging him in and saving a recipe, calling api to unsave.
2. The API uses the npm request module, the code for which can be found in the fe-apps/cooking/testconfig/commonutils.js
3. The tests register a random user (uses a logic to generate a fairly random email and password). The user's password and email address are not saved anywhere.
4. Above approach and so the tests will fail if NYTimes requires the user to validate his/her email address during signup.
5. It is assumed that all these tests users will be cleaned up from the the user's database via periodic jobs.
6. At certain points, the website uses capcha for verification. There is no known way for protractor to validate a capcha and as such the tests will fail if a capcha is presented. However, the lower environments on which these tests will usually run, are expected to go around capcha for ease of running the tests.
7. These tests test basic elements and can be enhanced to cover more DOM elements, connect to sauceLabs, capture reports via jasmine reporter tools as well as can be hooked up to Jenkins.

