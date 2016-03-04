var express = require('express');
var fs = require('fs');
var file = 'data.db';
var sqlite = require('sqlite3');
var app = express();
var db = new sqlite.Database(file);

app.use(express.static('public'));

app.get('/', function(req, res){

});

app.get('/pages', function (req, res) {
  db.serialize(function(){
    db.all('select * FROM pages',
     function(err, all){
      res.json(all);
    });
  });
});

app.get('/pages/:id', function (req, res) {
  db.serialize(function(){
    db.all('select * FROM pages WHERE id = ' + req.params.id,
     function(err, all){
      res.json(all);
    });
  });
});

app.listen(3000, function(){
  console.log("straadaa");
});
