
//this file is pulled to the router.js
//this will contain the code that gets the token and sends it to github


const gitHubTokenServer = 'https://github.com/login/oauth/access_token';
const dotenv = require('dotenv');
const util = require('util');
// const API = 'localhost:3000';
const superagent = require('superagent');
const SERVICE = `https://api.github.com/user?access_token=`;

let authorize = (request) => {

    return superagent.post(gitHubTokenServer)
    .send({
      client_id: process.env.CLIENT_ID ,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: request.query.code,
      redirect_uri: 'http://localhost:3000/oauth',
      state: 'randomstring',
    }).then(
        response => {
          console.log(`res.body: ${util.inspect(response.body,{depth:10})}`);
            let access_token = response.body.access_token;
            // console.log('(2)', access_token);
            return access_token;
        }
    ).then(token=> {
        // console.log(SERVICE, token);
        return superagent.get(SERVICE)
        .set('Authorization', `Bearer ${token}`)
        .then(response =>{
            let user = response.body;
            console.log('(3)', user)
        })
    })
}

module.exports = authorize;