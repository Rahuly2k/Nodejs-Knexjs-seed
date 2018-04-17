var express = require('express');
var bodyParser = require('body-parser');

var config = require('./config');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(bodyParser.urlencoded({extended:true})); // parse all type of values if false it parse only string

app.use(bodyParser.json());

var api = require('./app/routes/api')(app,express);

app.use('/api',api); // add /api in api url 

app.listen(config.port,function(){

    console.log('server started 3100');
});