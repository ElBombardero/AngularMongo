var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');


app.get('*',function(req, res){
    res.sendFile('./publico/index.html', {"root": __dirname});
});

app.listen("9090",function(){
    console.log('conectado ahora');
});