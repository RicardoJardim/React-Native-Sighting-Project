import {GET_FLORA} from './types';
import axios from 'axios';

export const getFlora = () => dispatch => {

  axios.get('http://seasurface.tigerwhale.com/api/info/flora')
  .then(res => {
    dispatch({
      type: GET_FLORA,
      payload: res.data
    })
  })
}
