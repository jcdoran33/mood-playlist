//back end implementation will go in this file
//require/import express, dotenv packages
const express = require('express');
const dotenv = require('dotenv');
const router = express.Router(); //unsure if this line is needed yet

const PORT = 5000;

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

//define env variables for easier use
const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const app = express();

//define routes
app.get('/auth/login', (req, res) => {

});

app.get('/auth/callback', (req, res) => {

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


//app listeningon port...
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});