import { MOVIES_LOAD, MOVIES_LOAD_SUCCESS, MOVIES_LOAD_FAIL } from '../../constants';

const loadMovies = () => ({
  type: MOVIES_LOAD
})

const setMovies = (movies) => ({
  type: MOVIES_LOAD_SUCCESS,
  movies,
})

const setError = (error) => ({
  type: MOVIES_LOAD_FAIL,
  error
})

export {
  loadMovies, setMovies, setError
}
