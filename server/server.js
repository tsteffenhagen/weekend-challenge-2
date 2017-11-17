var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));





app.listen(port, function(){
    console.log('listening on port', port);    
});