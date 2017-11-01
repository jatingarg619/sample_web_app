const initialState = {pageData:null}

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
     case "GET_PAGE_DATA": 
    return Object.assign({}, state, {
        pageData: action.card
      }) 
     case "UPDATE_PAGE_DATA":
     return Object.assign({}, state, {
        pageData: action.card
      }) 
    default:
      return state;
}
}