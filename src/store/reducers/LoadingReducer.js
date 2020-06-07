import { MOVIES_LOAD, MOVIES_LOAD_SUCCESS, MOVIES_LOAD_FAIL } from '../../constants';

const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case MOVIES_LOAD:
      return true;
    case MOVIES_LOAD_SUCCESS:
      return false;
    case MOVIES_LOAD_FAIL:
      return false;
    default:
      return state;
  }
}


export default LoadingReducer;
