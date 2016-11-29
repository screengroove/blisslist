const express = require('express');
const router = express.Router();

const Playlist = require('../models/playlist');

router.get('/', (req,res)=>{
	console.log("IN GET CTRLR" )
		
	Playlist
		.find()
		.exec((err,data)=>{
			res.json({playlist: data})
		})
})

router.post('/', (req , res)=>{
	let newItem = req.body
	//let prms = req.params
	

	req.body.playlist.map( item =>{
		let vidId =  item.id.videoId;
		let vidTitle = item.snippet.title;
		let vidThumb = item.snippet.thumbnails.default.url;
			
		new Playlist({ videoID: vidId, title: vidTitle, thumbnail:  vidThumb})
		    .save((err) => {
		        if (err) console.log(err)
		    })
		    .then(() => {
		       
		    })
	})
	 res.send("POST TO DB SUCCESS")
})

// router.delete('/:id/remove', (req,res) =>{
// 	let paramID = req.params.id
// 	console.log("DELETE ENDPOINT", paramID )
// 	Task
// 		.findByIdAndRemove(paramID, (err, task)=>{
// 			console.log("FOUND TASK", task )
// 			let response = {
//         			message: "Todo successfully deleted",
//         			id: task._id
//     			};	
//     			res.send(response);			
// 		})

// })

module.exports = router;