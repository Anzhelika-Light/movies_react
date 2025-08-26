import { useEffect, useState } from "react";
import MovieSearchForm from "../components/MovieSearchForm.jsx";
import MoviesList from "../components/MoviesList.jsx";
import { searchMovies } from "../services/movies-api";
import { Link, useSearchParams } from "react-router-dom";

const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get("movieId");
  // console.log(movieId);
  // const [search, setSearch] = useState("");
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await searchMovies(search, page);
  //       setItems((prevItems) => [...prevItems, ...data.results]);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   if (search) {
  //     fetchMovies();
  //   }
  // }, [page, search]);

  // const onSearch = (search) => {
  //   setSearch(search);
  //   setPage(1);
  //   setItems([]);
  // };

  // const loadMore = () => {
  //   setPage((page) => page + 1);
  // };

  // const isMovies = Boolean(items.length);

  const visibleMovies = items.filter((item) => item.includes(movieId));

  return (
    <div>
      <input
        type="text"
        value={movieId}
        onChange={(e) => setSearchParams({ movieId: e.target.value })}
      />
      {/* <button onClick={() => setSearchParams({ c: "kuku" })}>Search</button> */}
      <ul>
        {["dog-1", "dog-2", "dog-3", "dog-4", "dog-5"].map((dog) => (
          <li key={dog}>
            <Link to={`${dog}`}>{dog}</Link>
          </li>
        ))}
      </ul>
    </div>
    // <div>
    //   <MovieSearchForm onSubmit={onSearch} />
    //   {isMovies && <MoviesList items={items} />}

    //   {loading && <p>...loading</p>}
    //   {error && <p>Oops! Something went wrong. Try again later, please.</p>}
    //   {isMovies && (
    //     <button type="button" onClick={loadMore}>
    //       Load more
    //     </button>
    //   )}
    // </div>
  );
};

export default Movies;
