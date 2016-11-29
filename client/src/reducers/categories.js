// REDUCER

const initialState = {
  currentCategory: '',
  
}

function categories(state = initialState , action) {
  switch(action.type){
    case 'CURRENT_CATEGORY':
     console.log("CURRENT_CATEGORY", action.payload ) 
        return Object.assign( { }, state, {
            currentCategory: action.payload
        });

    default:
      return state;
  }
  return state;
}



export default categories;