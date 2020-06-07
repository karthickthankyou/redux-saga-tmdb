import { MOVIES_LOAD, MOVIES_LOAD_SUCCESS, MOVIES_LOAD_FAIL } from '../../constants';

const ErrorReducer = (state = null, action) => {
  switch (action.type) {
    case MOVIES_LOAD:
    case MOVIES_LOAD_SUCCESS:
      return null;
    case MOVIES_LOAD_FAIL:
      return action.error;
    default:
      return state;
  }
}


export default ErrorReducer;
