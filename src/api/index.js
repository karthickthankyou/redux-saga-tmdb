
const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8c091fdef8a76783449bf5cf029b8265';

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const fetchMovies = async (page) => {
  const response = await fetch(`${POPULAR_BASE_URL}&page=${page}`);
  const data = await response.json();
  if (data.status >= 400) {
    throw new Error(data.errors);
  }
  return data;

}

export { fetchMovies };
