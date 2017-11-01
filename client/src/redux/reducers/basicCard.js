
const initialState = {basicCard:[]}

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
     case "GET_BASIC_CARDS": 
    return Object.assign({}, state, {
        basicCard: action.cards
      }) 
    default:
      return state;
}
}