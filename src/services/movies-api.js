import axios from "axios";

// const baseURL = "https://themoviedb.org";
const baseURL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
const API_KEY = "8712dbd78445fc317dabfd96da27f9b2";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzEyZGJkNzg0NDVmYzMxN2RhYmZkOTZkYTI3ZjliMiIsIm5iZiI6MTc0OTAzMzUwNS4xMjQsInN1YiI6IjY4NDAyMjIxZDc2NDA2M2Y1MmFkOGFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vUnIZzY5NZb2935HhOUm2WMjtswSfMpuScZaneAjHzU",
  },
  //   params: { limit: 12 },
};

export const getMovies = async (page = 1) => {
  const { data } = await axios.get(`${baseURL}/movie?api_key=${API_KEY}`, {
    ...options,
    params: { page },
  });
  return data;
};

// const instance = axios.create({
//   baseURL: "https://themoviedb.org?API_KEY='8712dbd78445fc317dabfd96da27f9b2'",
//   params: { limit: 12 },
// });

// export const getMovies = async (page = 1) => {
//   const { data } = await instance.get("/trending/get-trending", {
//     params: { page },
//   });
//   return data;
// };

// fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// export const getSinglePost = async (id) => {
//   const { data } = await instance.get(`/${id}`);
//   return data;
// };

// export const searchPosts = async (q, _page = 1) => {
//   const { data } = await instance.get("/", {
//     params: { q, _page },
//   });
//   return data;
// };

// // for modules/PostsSearchPage
// export const searchingPosts = async (q) => {
//   const { data } = await instance.get("/", {
//     params: { q },
//   });
//   return data;
// };

// export const getPostComments = async (id) => {
//   const { data } = await instance.get(`/${id}/comments`);
//   return data;
// };
