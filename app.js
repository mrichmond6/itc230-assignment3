var book = require('./public/views/bookRecords.js');

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

var app = new express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));//this will allow direct nav to static files
app.use(bodyParser.urlencoded({
    extended: true
}));

//set handebars as the templating engine??
var viewsPath = __dirname + '/public/views';
var hbs = handlebars.create({
	defaultLayout: 'main', 
	layoutsDir: viewsPath + '/layouts',
	extname: '.hbs'
});

app.engine('hbs', hbs.engine);
app.set('views', viewsPath);
app.set('view engine', 'hbs');


////ROUTES////
app.get('/', function(req, res){
    res.setHeader('Content-Type','text/html');
    res.render('home', {title: 'Main'});
});

////send a plain text response for ABOUT ////
app.get('/about', function(req, res){
    res.type('text/html');
    res.render('About');
});


//handle get
app.get('/delete', function(req, res){
    var recordsNumbers = book.delete(req.query.title); //delete the book object
    res.render('delete',{
        title: req.query.title, result: recordsNumbers});
});

//handle post
app.post('/search', function(req,res){
    console.log(req.body)
    var found = book.get(req.body.searchTerm);
    res.render('details', {title: req.body.searchTerm, result: found});
});

//404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express Started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate the connection.' );
});