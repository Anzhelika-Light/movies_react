import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const API_KEY = "8712dbd78445fc317dabfd96da27f9b2";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzEyZGJkNzg0NDVmYzMxN2RhYmZkOTZkYTI3ZjliMiIsIm5iZiI6MTc0OTAzMzUwNS4xMjQsInN1YiI6IjY4NDAyMjIxZDc2NDA2M2Y1MmFkOGFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vUnIZzY5NZb2935HhOUm2WMjtswSfMpuScZaneAjHzU",
  },
};

export const getMovies = async (page = 1) => {
  const { data } = await axios.get(
    `${baseURL}/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    {
      ...options,
      params: { page },
    }
  );
  return data;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `${baseURL}/search/movie?query=${query}&api_key=${API_KEY}`,
    {
      ...options,
      params: { query, page },
    }
  );
  return data;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
    { ...options }
  );
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await axios.get(
    `${baseURL}/movie/${id}/credits?language=en-US&api_key=${API_KEY}`,
    { ...options }
  );
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await axios.get(
    `${baseURL}/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`,
    { ...options }
  );
  return data;
};

// Trending movies:
// Страница с описанием API: https://developer.themoviedb.org/reference/trending-movies
// Адрес для запроса: https://api.themoviedb.org/3/trending/movie/day

// Search movies:
// Страница с описанием API: https://developer.themoviedb.org/reference/search-movie
// Адрес для запроса: https://api.themoviedb.org/3/search/movie

// Movie details:
// Страница с описанием API: https://developer.themoviedb.org/reference/movie-details
// Адрес для запроса: https://api.themoviedb.org/3/movie/{movie_id}

// Movie credits:
// Страница с описанием API: https://developer.themoviedb.org/reference/movie-credits
// Адрес для запроса: https://api.themoviedb.org/3/movie/movie_id/credits

// Movie reviews:
// Страница с описанием API: https://developer.themoviedb.org/reference/movie-reviews
// Адрес для запроса: https://api.themoviedb.org/3/movie/movie_id/reviews
