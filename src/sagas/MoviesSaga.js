import { takeEvery, put, select, call } from 'redux-saga/effects';
import { MOVIES_LOAD } from '../constants';
import { fetchMovies } from '../api';
import { setMovies, setError } from '../store/actions';

const getPage = state => state.nextPage;

function* handleMoviesLoad() {
  try {
    const page = yield select(getPage);
    const movies = yield call(fetchMovies, page);

    yield put(setMovies(movies.results));
  } catch (err) {
    yield put(setError(err.toString()))
  }
}

// Watcher saga
function* watcherSaga() {
  yield takeEvery(MOVIES_LOAD, handleMoviesLoad);
}

export default watcherSaga;


// Watches saga -> (listens to) actions ->(invokes) Worker Sagas.
