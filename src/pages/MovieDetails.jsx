import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../services/movies-api";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        console.log("MovieDetails: ", data);
        setItems((prevItems) => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      fetchMovieDetails();
    };
  }, [movieId]);

  return (
    <div>
      <h1>Movie details: {movieId}</h1>
      {/* {isMovies && <MoviesList items={items} />} */}
      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
      {/* {isMovies && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )} */}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
