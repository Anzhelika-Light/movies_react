import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import PageLayout from "./components/Layout/Layout";
import Layout from "./components/Layout/Layout";

import "./styles/style.css";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const Cast = lazy(() => import("./components/Cast"));
const Reviews = lazy(() => import("./components/Reviews"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
// Ключ доступа к API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzEyZGJkNzg0NDVmYzMxN2RhYmZkOTZkYTI3ZjliMiIsIm5iZiI6MTc0OTAzMzUwNS4xMjQsInN1YiI6IjY4NDAyMjIxZDc2NDA2M2Y1MmFkOGFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vUnIZzY5NZb2935HhOUm2WMjtswSfMpuScZaneAjHzU
// Ключ API
// 8712dbd78445fc317dabfd96da27f9b2

export default App;
