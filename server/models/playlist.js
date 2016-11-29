const mongoose = require('mongoose');

let playListSchema = new mongoose.Schema({

	videoID: {
		type: String,
		required: false
	},
	title: {
		type: String,
		required: false
	},
	thumbnail: {
		type: String,
		required: false
	}

})

module.exports = mongoose.model('Playlist', playListSchema)