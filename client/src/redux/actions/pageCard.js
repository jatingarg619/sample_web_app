import axios from 'axios';

const pageCard_Actions = {

 getPage: (url, params) => {
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
            type: 'GET_PAGE_DATA',
            card: response.data
          })
      })
      .catch(function(response){
        console.log(response)
        })
      }
},

editCard: (url,data) =>{
    return (dispatch) => {
        return axios({         
      url: url.concat(data.id),
      timeout: 20000,
      method: 'put',
      data,
      responseType: 'json'
        })
      .then(function(response) {
        dispatch({
          type: 'UPDATE_PAGE_DATA',
          card: response.data
          })
      })
      .catch(function(response){
        console.log(response)
        })

    }
  },

}

export default pageCard_Actions;
