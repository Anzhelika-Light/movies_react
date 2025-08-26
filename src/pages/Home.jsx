import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { getMovies } from "../services/movies-api";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  let totalMoviesCount;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies(page);
        totalMoviesCount = data.total_results;
        // console.log(data);
        setItems((prevItems) => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const isMovies = Boolean(items.length);

  return (
    <div>
      <h1>The most popular movies for today</h1>
      {isMovies && <MoviesList items={items} />}
      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
      {isMovies && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Home;
