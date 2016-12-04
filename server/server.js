const express 		= require('express'),
	    morgan 		= require('morgan'),
	    path      		= require('path'),
	    bodyParser = require('body-parser'),
	     db			 =require('./db'),
	     playListRouter = require('./controllers/playlist');

// CONFIG (USE) ============================

const app = express();

app.use( morgan('dev') );
app.use( bodyParser.json() );



if (process.env.NODE_ENV === 'production') {
  app.use('/',express.static('client/build'));
} else {
   app.use('/', express.static(path.join(__dirname, 'public')));
}

// LISTEN (SET) =============================

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function(){
	console.log('API Server started: http://localhost:' + app.get('port') + '/');	
})

// ROUTING (GET) =============================

// Connect controller for endpoint
app.use('/api/playlist', playListRouter)

app.get('*', (req, res) => {
	res.sendfile('./client/public/index.html');
})






