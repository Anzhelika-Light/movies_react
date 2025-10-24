import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Flex } from "antd";
import MovieSearchForm from "../components/MovieSearchForm.jsx";
import MoviesList from "../components/MoviesList/MoviesList.jsx";
import Container from "../components/Container.jsx";
import { searchMovies } from "../services/movies-api";

const Movies = () => {
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

  const onSearch = ({ search }) => {
    console.log(search);
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
      {isMovies && !loading && (
        <Flex gap="small" justify="center" wrap>
          <Button
            type="primary"
            onClick={loadMore}
            style={{ marginTop: "10px" }}
          >
            Load More
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export default Movies;
