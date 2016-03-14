'use strict'

var express = require('express');
var app = express();

//Load Angular application from 'public' folder
var path = '../../public';
app.use(express.static(__dirname + '/' + path));

app.listen(process.env.PORT, function() {
    console.log(__dirname + '/' + path);
    console.log("Find a dry cleaner server loaded");
});