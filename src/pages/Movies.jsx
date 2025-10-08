import { useEffect, useState } from "react";
import MovieSearchForm from "../components/MovieSearchForm.jsx";
import MoviesList from "../components/MoviesList/MoviesList.jsx";
import { searchMovies } from "../services/movies-api";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(search, page);
        console.log(data);
        setItems((prevItems) => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchMovies();
    }
  }, [page, search]);

  const onSearch = (search) => {
    setSearch(search);
    setPage(1);
    setItems([]);
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const isMovies = Boolean(items.length);

  return (
    <div>
      <MovieSearchForm onSubmit={onSearch} />
      {isMovies && <MoviesList items={items} location={location} />}

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

export default Movies;
