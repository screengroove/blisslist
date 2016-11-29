const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://dbuser:test@ds113668.mlab.com:13668/blisslist'); 

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', (callback) =>{
	console.log('we are connected to our DB' )
		
})

module.exports = db;