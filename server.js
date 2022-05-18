const express = require('express');
const res = require('express/lib/response');
const drinks = require('./models/drinks');
const food = require('./models/food');

const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.render('root.ejs');
});

app.get('/drinks/', (req, res)=>{
    res.render('drinks_index.ejs', { drinks });
});

app.get('/food/', (req, res)=>{
    res.render('food_index.ejs', { food });
});

app.get('/drinks/:id', (req, res)=>{
    res.render('drinks_show.ejs', {
        drinks: drinks[req.params.id]
    });
});

app.get('/food/:id', (req, res)=>{
    res.render('food_show.ejs', {
        food: food[req.params.id]
    });
});

app.listen(port, ()=>{
    console.log('listening to port ', port);
});