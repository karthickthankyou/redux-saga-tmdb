import { MOVIES_LOAD_SUCCESS, MOVIES_LOAD_FAIL } from '../../constants';

const MoviesReducer = (state = [], action) => {
  switch (action.type) {
    case MOVIES_LOAD_FAIL:
      return [];
    case MOVIES_LOAD_SUCCESS:
      return [
        ...state,
        ...action.movies
      ];
    default:
      return state;
  }
}


export default MoviesReducer;
