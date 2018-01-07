var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');
var cors = require('cors')



mongoose.connect('mongodb://localhost:27017/lista-angular');

var Lista = mongoose.model('Lista', {
    texto:String,
    textos: String,
    terminado: Boolean,
    valor: Number
});
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
      

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

app.get('/api/lista',function(req, res){
    Lista.find( function(error, lista){
        if(error){
            res.send(error);
        }

        res.json(lista);
    });
});

app.delete('/api/lista/:item', function (req, res) {
    Lista.remove({
        _id: req.params.item
    }, function (error, lista) {
        if (error) {
            res.send(error);
        }
        Lista.find(function (error, lista) {
            if (error) {
                res.send(error);
            }
            res.json(lista);
        });
    });
});

app.put('/api/lista/:item', function(req, res){
    console.log(req.body)
    if (req.body.texto != null){
        Lista.findOneAndUpdate(
            {_id: req.params.item},
            {terminado:true, texto: req.body.texto},
            function(error, lista){
                if(error){
                    res.send(error);
                }
                Lista.find(function(error, lista){
                    if(error){
                        res.send(error);
                    }
                    res.json(lista);
                });
            }
        );
    }
    if(req.body.valor != null){
        Lista.findOneAndUpdate(
            {_id: req.params.item},
            {terminado:true, valor: req.body.valor},
            function(error, lista){
                if(error){
                    res.send(error);
                }
                Lista.find(function(error, lista){
                    if(error){
                        res.send(error);
                    }
                    res.json(lista);
                });
            }
        );
    }
});
app.listen("9090",function(){
    console.log('conectado ahora');
});