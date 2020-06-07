import { combineReducers } from 'redux';

import ErrorReducer from './ErrorReducer'
import MoviesReducer from './MoviesReducer'
import LoadingReducer from './LoadingReducer'
import PageReducer from './PageReducer'

const rootReducer = combineReducers({
  isLoading: LoadingReducer,
  movies: MoviesReducer,
  error: ErrorReducer,
  nextPage: PageReducer
})

export default rootReducer;
