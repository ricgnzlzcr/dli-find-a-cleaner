'use strict'

var express = require('express');
var app = express();

var path = '../../public';
var route = __dirname + '/' + path

app.use('/', express.static(path));

app.listen(process.env.PORT, function() {
    console.log(route);
    console.log("Server loaded");
});