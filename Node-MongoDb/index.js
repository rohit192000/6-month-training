const express = require('express');
const app = express();

const things = require('./things.js');

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/home', (req, res) => {
    res.send("This is Home Page");
});

app.listen(1000, (req, res) => {
    console.log("Server Started")
});