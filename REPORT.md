![CF](http://i.imgur.com/7v5ASc8.png) OAuth Comparative Analysis
================================================================

## OAuth Provider: GITHUB

### Research Conducted By: Hannah Ingham, George Raymond, Jon DiQuattro, and Ryan Gallaway

### Overall Score and Comments
#### Score (Out of 10): 10
#### General Comments
Solid Documentation: clear, step by step community supportive guidance, 

#### Pros
* Good documentation
* Accessible
* Strong community

#### Cons
* GitHub account required -so not for all global products

### Ratings and Reviews
#### Documentation
We recommend Github for oauth, but recognize that this is only useful for Dev oriented/industry uses.

#### Systems Requirements
Can play at AWS/Heroku, 
Above and beyond 'node' and 'linux', * our dependencies include:
  *  "dotenv": "^6.2.0",
  *  "express": "^4.16.3"
  *  "cors": "^2.8.4",
  *  "debug": "^4.1.0",
  *  "dotenv": "^6.1.0",
  *  "express": "^4.16.3",
  *  "jest": "^23.6.0",
  *  "jsonwebtoken": "^8.4.0",
  *  "mongodb-memory-server": "^2.7.3",
  *  "mongoose": "^5.3.13",
  *  "mongoose-schema-jsonschema": "^1.1.15",
  *  "morgan": "^1.9.0",
  *  "require-directory": "^2.1.1",
  *  "supertest": "^3.3.0",


#### Ramp-Up Projections
A team of mid-level devs should be able to achieve a high level of productivity in a week or less depending on how much of the supporting code exists.


#### Community Support and Adoption levels
Github is quite popular and arguably essential for the Dev community.  It is well supported by large companies and open source alike.  Because of its adoption level, a diverse community is committed to it's support and growth

### Links and Resources
* [framework](github.com)
* [docs](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
* [examples/tutorials](https://www.youtube.com/watch?v=x33aXUU8PpQ&index=46&list=PLVngfM2hsbi-kJH9daenyDavZ-zErnhHL&t=0s)

### Code Demos
* [web-server Heroku](https://lab17-oauth-web-server.herokuapp.com)
* [auth-server Heroku](https://lab17-oauth-auth-server.herokuapp.com)
* [web-server repository](https://github.com/rkgallaway/17-oauth-web-server)
* [auth-server repository](https://github.com/rkgallaway/17-oauth-auth-server)
* [mongo uri(auth-server)](mongodb://heroku_6srft1sw:atfnqo2h59rhco0dgqm8opcv6k@ds135441.mlab.com:35441/heroku_6srft1sw)
### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm` i to install dependencies
* `nodemon` to start web-server
* `nodemon` to start auth-server
* visit http://localhost:8080
* Endpoint: console logs in auth-server terminal

#### we left off retrieving this info in our alloted eval timebox.  It is not saving the object to MongoDB, and should require minimal effort to finish.
```
{ login: 'georgeraymond92',
  id: 33530443,
  node_id: 'MDQ6VXNlcjMzNTMwNDQz',
  #### EXTENSIVE URLS FOR REPOS ETC: [......]
  type: 'User',
  site_admin: false,
  name: 'George Raymond',
  company: null,
  blog: '',
  location: 'Seattle',
  email: null,
  hireable: true,
  bio: 'Full Stack Javascript Developer. Currently enrolled in Codefellows 401 javascript course',
  public_repos: 60,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: '2017-11-09T22:00:03Z',
  updated_at: '2019-01-16T00:42:48Z',
  private_gists: 0,
  total_private_repos: 0,
  owned_private_repos: 0,
  disk_usage: 149210,
  collaborators: 0,
  two_factor_authentication: false,
  plan:
   { name: 'free',
     space: 976562499,
     collaborators: 0,
     private_repos: 10000 } }
```