import { GET_REPORTS} from '../actions/types';

const initialState = {
  reports: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REPORTS:
      return {
        ...state,
        reports: action.payload
      }
      break;
    default:
      return state;

  }
}
