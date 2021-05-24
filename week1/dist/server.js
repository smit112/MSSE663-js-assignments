"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
function serve(req, res) {
    res.send('hello world');
}
app.use('/', serve);
app.listen(8000, function () {
    console.log('running server');
});
