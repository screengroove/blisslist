// REDUCER

import exampleVideoData from '../helpers/dummyData'


const initialState = {
  playlist: exampleVideoData,
  my_playlist: []
}

function videos(state = initialState , action) {
  switch(action.type){
    case 'SWAP_VIDEO':
        return Object.assign( { }, state, {
            selectedVideo: action.payload
        });
    case 'FETCH_PLAYLIST':
          console.log("FETCH PAYLOAD", action.payload )            
           return Object.assign( { }, state, {
              playlist: action.payload
          });
     case 'MY_PLAYLIST':
         console.log("FETCH MY_PLAYLIST", action.payload)
         return Object.assign({}, state, {
             my_playlist: action.payload
         });

      case 'QUEUE_VIDEOS':     
           var temp =  Object.assign( { }, state, {
              queued_videos: [...state.queued_videos, action.payload]
      });

    default:
      return state;
  }
  return state;
}



export default videos;