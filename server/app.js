// import files and packages up here
const express = require('express');
const morgan = require('morgan');


// create your express server below
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("It's working"));
// add your routes and middleware below
app.get('/')

// finally export the express application
module.exports = app;
