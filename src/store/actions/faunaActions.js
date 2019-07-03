import {GET_FAUNA} from './types';
import axios from 'axios';

export const getFauna = () => dispatch => {

  axios.get('http://seasurface.tigerwhale.com/api/info/fauna')
  .then(res => {
    dispatch({
      type: GET_FAUNA,
      payload: res.data
    })
  })
}
