import axios from 'axios';

const TMDB_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const headers = {
  Authorization: `Bearer ${TMDB_API_KEY}`,
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers,
  });
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query },
    headers,
  });
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, { headers });
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers,
  });
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers,
  });
  return response.data;
};
