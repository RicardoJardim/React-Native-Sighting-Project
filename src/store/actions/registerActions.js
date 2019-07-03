import {SET_REGISTER} from './types';
import axios from 'axios';

export const getRegister = (registerData) => dispatch => {

  axios.post('http://seasurface.tigerwhale.com/api/register?name=',registerData.name,'&surname=',registerData.surname,'&username=',registerData.username,'&password=',registerData.password,'&email=',registerData.email)
  .then(res => {
      dispatch({
        type: SET_REGISTER,
        payload: res.data
      })
    })
}
