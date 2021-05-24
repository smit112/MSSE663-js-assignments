var express = require('express');

var app= express();

app.use('/',function(req, res) {
    res.send('hello world');

});


app.listen(8000, function(){
    console.log('running server');
});