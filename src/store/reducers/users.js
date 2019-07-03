import { SET_CURRENT_USER} from '../actions/types';

const initialState = {
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        users: action.payload
      }
      break;
    default:
      return state;

  }
}
