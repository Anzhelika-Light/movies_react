import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../services/movies-api";
import { StyledLink, Container } from "./MovieDetails.styled";

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        console.log("movie details:", data);
        setItems((prevItems) => [...prevItems, ...data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      fetchMovieDetails();
    };
  }, [movieId]);

  console.log(location);
  console.log(backLinkLocationRef);

  return (
    <Container>
      <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
      <h1>Movie details: {movieId}</h1>

      {/* {isMovies && <MoviesList items={items} />} */}
      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
      {/* {isMovies && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )} */}
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
