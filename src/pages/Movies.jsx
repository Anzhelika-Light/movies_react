import { useEffect, useState } from "react";
import MovieSearchForm from "../components/MovieSearchForm.jsx";
import MoviesList from "../components/MoviesList/MoviesList.jsx";
import Container from "../components/Container.jsx";
import { searchMovies } from "../services/movies-api";
import { useLocation, useSearchParams } from "react-router-dom";

const Movies = () => {
  // const location = useLocation();
  // console.log(location);
  // const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(query, page);
        console.log(data);
        setItems((prevItems) => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchMovies();
    }
  }, [page, query]);

  // const updateQueryString = (e) => {
  //   const nextParams = e.target.value !== "" ? { query: e.target.value } : {};
  //   setSearchParams(nextParams);
  // };

  // const updateQueryString = (search) => {
  //   const nextParams = search !== "" ? { query: search } : {};
  //   setSearchParams(nextParams);
  // };

  const onSearch = ({ search }) => {
    // setSearch(search);
    const nextParams = search !== "" ? { query: search } : {};
    setSearchParams(nextParams);
    setPage(1);
    setItems([]);
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const isMovies = Boolean(items.length);

  return (
    <Container>
      <MovieSearchForm onSubmit={onSearch} />
      {isMovies && <MoviesList items={items} />}

      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
      {isMovies && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </Container>
  );
};

export default Movies;
