import {SET_CURRENT_USER} from './types';
import axios from 'axios';

export const getUsers = (userData) => dispatch => {

  axios.post('http://seasurface.tigerwhale.com/api/login?email=',userData.email,'&password=',userData.password)
  .then(res => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data
    })
  })
}

/*
export const loginUser = (userData) => dispatch => {
   AC
  axios.post('http://seasurface.tigerwhale.com/api/login', userData) //url de login
  .then(res => {
    dispatch({
      type: SET_CURRENT_USER,
      payload: res
    })
  })
}
*/
