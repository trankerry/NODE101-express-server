// import files and packages up here
const topSpots = require('./data.json');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.status(200).send('New Express Server');
});

app.get('/data', function(req,res) {
    res.status(200).send(topSpots)
})

// finally export the express application
module.exports = app;
