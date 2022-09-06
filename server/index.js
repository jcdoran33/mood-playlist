//back end implementation will go in this file
//require/import express, dotenv packages
const express = require('express');
const dotenv = require('dotenv');
const router = express.Router(); //unsure if this line is needed yet
//probably need to require request package here, define as = to request
const request = require('request');

const PORT = 5000;

dotenv.config();

//define env variables for easier use
const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const spotify_redirect_uri = 'http://localhost:3000/auth/callback';

//define function that generates random string for state value
var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
//end random string function

const app = express();

//define routes
app.get('/auth/login', (req, res) => {

});

app.get('/auth/callback', (req, res) => {
    const code = req.query.code;

    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: "http://localhost:3000/auth/callback",
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token; //save the access_token to local constant
            res.redirect('/'); //redirect to homepage if successfull 200 response
        }
    });
});

//route below for implementing user authentication REQUEST
router.get('/auth/login', (req, res) => {

    var scope = "streaming \
                 user-read-email \
                 user-read-private"

    var state = generateRandomString(16);

    var auth_query_parameters = new URLSearchParams({
        response_type: "code",
        client_id: spotify_client_id,
        scope: scope,
        redirect_uri: "http://localhost:3000/auth/callback",
        state: state
    })

    res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
});

//route to return the access token in JSON format
app.get('/auth/token', (req, res) => {
    res.json(
        {
            access_token: access_token
        })
});


//app listeningon port...
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});