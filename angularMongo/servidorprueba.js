var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/api/lista', (req, res) => {
console.log(req.body)
Lista.create({
    texto: req.body.texto
}, function(error, lista){
    if(error){
        res.send(error);
    }
    Lista.find( function(error, lista){
        if(error){
            res.send(error);
        }

        res.json(lista);
    });
});
});

app.listen("9090",function(){
    console.log('conectado ahora');
});