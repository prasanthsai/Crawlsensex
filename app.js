	global._ROOT = process.env.PWD;
	var express = require('express');
	var exphbs  = require('express-handlebars');
	var routes = require('./routes/routes');
	var cookieParser = require('cookie-parser');
	var app = express();
	app.use(cookieParser());
	var bodyParser = require('body-parser');
	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
		extended: true
	}));
	app.engine('.hbs', exphbs({
		defaultLayout: 'main',
		extname: '.hbs'
		}));

	var port = process.env.PORT || 3010;

	app.set('view engine', '.hbs');
	app.use(express.static(__dirname + '/public', {maxAge: 86400000}));
	app.use('/', routes.router);

	var server = app.listen(port, function(){
		console.log("server listening on port "+port);
	});
