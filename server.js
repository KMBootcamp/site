var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){

});

app.get('/pages', function(req, res){

});

app.listen(3000, function(){
  console.log("strada");
});
