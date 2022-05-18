const express = require('express');
const res = require('express/lib/response');
const drinks = require('./models/drinks');

const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send('Welcome to the Gitpub App');
});

app.get('/drinks/', (req, res)=>{
    // res.send(drinks);
    res.render('drinks_index.ejs', { drinks });
});

app.listen(port, ()=>{
    console.log('listening to port ', port);
});