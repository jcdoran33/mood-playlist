//back end implementation will go in this file
//require/import express, dotenv packages
const express = require('express');
const dotenv = require('dotenv');

const PORT = 5000;

//define env variables for easier use
const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const app = express();

//define routes
app.get('/auth/login', (req, res) => {

});

app.get('/auth/callback', (req, res) => {

});

//app listeningon port...
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});