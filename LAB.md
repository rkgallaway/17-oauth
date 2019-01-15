# LAB: OAuth

## Before you begin
* This lab contains 2 folders
  * `www-server` - The Web Server with the login form 
  * `auth-server` - The Backend Server that takes care of the authentication and user creation processes
* You will need to create 2 new repositories from the contents of these folders
* When you deploy, deploy them separately to Heroku, into new dynos.

## High Level Overview / Story
Our company has decided to integrate OAuth instead of managing usernames and passwords internally. In order to make the best decision, we are creating small research teams to assess the suitability of various OAuth providers.

## Assignment
* You will be assigned an OAuth provider to integrate with. Sites such as Yahoo, Github, Facebook, and AWS all have OAuth mechanisms that work similarly to Google. Integrate your provider into the auth server, using google+ as your guide, reporting back to the team with a general feasability report.

This is a paired lab that will have you integrating OAuth with any provider.

Spend no more than 4 hours on this assignment.

### backend
* create an account/app/credential on your assigned OAuth Provider
 * configure oauth credentials to support a client app on `http://localhost`
 * configure oauth credentials to support a server redirect uri to `http://localhost:3000/oauth`
* create a backend route `GET /oauth` for handling oauth redirects
* create a new file under `/src/auth/oauth` for your provider

### frontend
* create an index.html with an anchor tag pointing to the google authorization page
* configure the query string with correct key value pairs

###  Documentation and Presentation
Complete the README.md file included in the lab folder, with your deployed resources.

Complete the REPORT.md file included in the lab folder and prepare a group presentation for the class based on your findings.


## Provider Documentation Reference
* [GitHub](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
* [Auth0](https://auth0.com/)
* [Wordpress](https://developer.wordpress.com/docs/oauth2/)
* [Facebook](https://developers.facebook.com/docs/facebook-login/)
* [LinkedIn](https://developer.linkedin.com/docs/signin-with-linkedin)
