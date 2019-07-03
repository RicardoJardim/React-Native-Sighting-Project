import { GET_FAUNA} from '../actions/types';

const initialState = {
  fauna: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAUNA:
      return {
        ...state,
        fauna: action.payload
      }
      break;
    default:
      return state;

  }
}
