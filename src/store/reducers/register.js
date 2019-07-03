import { SET_REGISTER} from '../actions/types';

const initialState = {
  register: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTER:
      return {
        ...state,
        register: action.payload
      }
      break;
    default:
      return state;

  }
}
