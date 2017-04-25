// set up ======================================================================
var express = require('express');
var app = express();    // create our app w/ express
var port = process.env.PORT || 3000;    // set the port
var morgan = require('morgan');   // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override');  // simulate DELETE and PUT (express4)
var mongoose = require('mongoose'); 					// mongoose for mongodb
var database = require('./config/database'); 			// load the database config

// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

//prepare server
app.use(express.static(__dirname + '/public')); 
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect jquery.js				// set the static files location /public/img will be /img for users
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap.js

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirtect bootstrap.css
app.use('/js', express.static(__dirname + '/node_modules/angular')); // redirtect bootstrap.css

app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 	 // parse application/x-www-form-urlencoded
app.use(bodyParser.json());            // parse json format
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);