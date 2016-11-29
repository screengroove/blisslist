import axios from 'axios';

export function callAPI(query='meditation'){
  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key:'AIzaSyDvKpbMTnN3oQjwugo0qWnHM6y_QR5mxmE',
      part:'snippet',
      q:`meditation for  ${query}`
    }
  })
//   .then(function (response) {
//     console.log(response);
//     return response.data

//   })
//   .catch(function (error) {
//     console.log(error);
//   });
}

export function callDB(query='meditation'){
  return axios.get('/api/playlist')
//   .then(function (response) {
//     console.log(response);
//     return response.data

//   })
//   .catch(function (error) {
//     console.log(error);
//   });
}

export default callAPI;
