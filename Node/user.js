var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/lista-angular');

const userSchema = new Schema({
    email: {tipe: String, unique: true, lowercase: true},
    displayName: String,
    avatar: String,
    password: {type: String, select: false},
    lasLogin: Date
});

