import {callAPI, callDB} from './../helpers/api';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router'

export function fetchVideoData(searchTerm="tennis") {  
   return function(dispatch) {
   callAPI(searchTerm)
     .then(function (response) {
        console.log("API RESPONSE", response);
         dispatch({
          type: 'FETCH_PLAYLIST',
          payload: response.data.items
        });
    })
     .then(function(){
     		console.log("Transition to ROUTE")
     		browserHistory.push('/results')
     })
    //return response.data

  }
}

export function fetchPlaylist() {  
   return function(dispatch) {
   callDB()
     .then(function (response) {
        console.log(" fetchPlaylist API RESPONSE", response);
         dispatch({
          type: 'MY_PLAYLIST',
          payload: response.data.playlist
        });
    })
    //return response.data

  }
}

export function addToQueue(selectedVideo) { 
console.log('addToQueue', selectedVideo )

return {
     type: 'QUEUE_VIDEOS',
     payload: selectedVideo
  }
}

export function setCurrentCat(selectedCat) { 
console.log('setCurrentCat', selectedCat )
return {
     type: 'CURRENT_CATEGORY',
     payload: selectedCat
  }
}