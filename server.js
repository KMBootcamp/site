var express = require('express');
var fs = require('fs');
var file = 'data.db';
var sqlite = require('sqlite3');
var app = express();
var db = new sqlite.Database(file);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

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
    db.get('select * FROM pages WHERE id = ' + req.params.id,
     function(err, all){
     res.json(all);
    });
  });
});

app.post('/pages', function(req, res){
  var test = db.run("INSERT INTO pages (title, image, content) VALUES ($title, $image, $content)", {
    $title: req.body.title,
    $image: req.body.image,
    $content: req.body.content
  });
  res.json(test);
});

app.listen(3000, function(){
  console.log("straadaa");
});
