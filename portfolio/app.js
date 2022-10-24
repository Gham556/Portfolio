const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render('home')
});

module.exports = app;