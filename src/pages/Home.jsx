import { useEffect, useState } from "react";
import { Typography } from "antd";
import MoviesList from "../components/MoviesList/MoviesList";
import Container from "../components/Container";
import { getMovies } from "../services/movies-api";
import LoadMoreBtn from "../components/Button";

// import React from 'react';
// import { Typography } from 'antd';
// const { Title } = Typography;
// const App = () => (
//   <>
//     <Title>h1. Ant Design</Title>
//     <Title level={2}>h2. Ant Design</Title>
//     <Title level={3}>h3. Ant Design</Title>
//     <Title level={4}>h4. Ant Design</Title>
//     <Title level={5}>h5. Ant Design</Title>
//   </>
// );
// export default App;

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
      {/* <h1>The most popular movies for today</h1> */}
      {isMovies && <MoviesList items={items} />}
      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
      {isMovies && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
        // <LoadMoreBtn onClick={loadMore} />
      )}
    </Container>
  );
};

export default Home;
