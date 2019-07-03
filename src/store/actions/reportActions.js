import {GET_REPORTS} from './types';
import axios from 'axios';

export const getReports = () => dispatch => {

  axios.get('http://seasurface.tigerwhale.com/api/reports')
  .then(res => {
      dispatch({
        type: GET_REPORTS,
        payload: res.data
      })
    })
}
