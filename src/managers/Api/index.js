import axios from 'axios'

const BASE_URL = 'https://tintopolis.cl/wp-json/wp/v2/'

export const API_posts ={

  fetch: async (params = []) => {

    let parsedParams = '';
    if(params.length > 0){
      parsedParams = '?'
      parsedParams += params.reduce(( acc,id,index ) => {
        const aux = index == 0 ? '' : '&';
        return acc + aux + 'include[]=' + id;
      },'')
    }
    try{
      const response = await axios(BASE_URL + 'posts' + parsedParams);
      return response.data;
    }catch( err ){
      console.log(err)
      return []
    }
  }

}
