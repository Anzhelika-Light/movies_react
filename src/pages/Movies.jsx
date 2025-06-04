import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  //   useEffect(() => {}, []);

  //   const elements = items.map((item) => <li>{item.name}</li>);
  const items = ["movie-1", "movie-2", "movie-3", "movie-4", "movie-5"];
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setSearchParams({ query: e.target.value })}
      />
      <ul>
        {items.map((item) => (
          <Link to={`${item}`} key={item}>
            {item}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
