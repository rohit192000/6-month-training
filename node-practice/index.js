const express = require('express');
const app = express();
const ejs = require('ejs');

//view enjine format only work in views folder where we write ejs files
app.set('view engine', 'ejs');// It set the value of app so that it calls from ejs not html. 

var a = 'Rohit Samal';//a variable define to render on the frotend

var b = ['Naveen', 'AAkash', 'Rohit'];

app.get('/', (req,res) => {
    // console.log('Welcome to Home Page');
    res.render('home', {Name: a, Arr: b});// sending data a to the home.ejs
})

app.get(('/About'), (req, res) => {
    // res.send('Welcome to About Page');
    res.render('about');
}) 
app.listen(100, (req, res) => {
    console.log('Server Started');
    // res.send('Server Started');
})