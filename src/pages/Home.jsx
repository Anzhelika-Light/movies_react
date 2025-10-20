import { useEffect, useState } from "react";
import { Typography, Button, Flex } from "antd";
import MoviesList from "../components/MoviesList/MoviesList";
import Container from "../components/Container";
import { getMovies } from "../services/movies-api";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const { Title } = Typography;

  let totalMoviesCount;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies(page);
        console.log("MOVIES", data);
        totalMoviesCount = data.total_results;
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
    <Container>
      <Title>The most popular movies for today</Title>

      {isMovies && <MoviesList items={items} />}
      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
      {isMovies && !loading && (
        <Flex gap="small" wrap>
          <Button
            type="primary"
            onClick={loadMore}
            styles={{ marginTop: "10px" }}
          >
            Load More
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export default Home;
