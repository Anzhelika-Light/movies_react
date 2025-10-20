import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/movies-api";
import { useState, useEffect } from "react";

const Cast = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getMovieCredits(movieId);
        setItems((prevItems) => [...prevItems, ...data.cast]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const isInfo = Boolean(items.length);

  const elements = items.map(({ id, profile_path, name, character }) => (
    <li key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w200${profile_path}`}
        alt={`${name} photo`}
      />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));
  console.log(items);

  return (
    <div>
      {isInfo && <ul>{elements}</ul>}
      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
    </div>
  );
};

export default Cast;
