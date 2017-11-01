import axios from 'axios';

const basicCard_Actions = {

 getBasicCards: (url) => {
     return (dispatch) => {
             return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
      .then(function(response) {
      	console.log(response)
        dispatch({
            type: 'GET_BASIC_CARDS',
            cards: response.data.cards
          })
      })
      .catch(function(response){
        console.log(response)
        })
      }
}
}

export default basicCard_Actions;
