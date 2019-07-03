import { GET_FLORA} from '../actions/types';

const initialState = {
  flora: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FLORA:
      return {
        ...state,
        flora: action.payload
      }
      break;
    default:
      return state;

  }
}
