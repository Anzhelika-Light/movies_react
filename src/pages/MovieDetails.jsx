import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../services/movies-api";
import Container from "../components/Container";
import { StyledLink } from "./MovieDetails.styled";

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        console.log("movie details:", data);
        setItem(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path } = item;
  console.log(genres);

  return (
    <Container>
      <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
      <h1>Movie details: </h1>
      <img src={poster_path} alt={`poster of ${title} movie`} />

      <div>
        <p>
          <b>{title}</b>
        </p>
        <p>
          <b>User score:</b> {vote_average}
        </p>
        <p>
          <b>Overview:</b> {overview}
        </p>
        <p>
          <b>Genres: </b>
          {genres?.map(({ name }) => name).join(", ")}
        </p>
      </div>

      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}

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
