import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  //   const [items, setItems] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  //   useEffect(() => {}, []);

  //   const elements = items.map((item) => <li>{item.name}</li>);
  const items = ["movie-1", "movie-2", "movie-3", "movie-4", "movie-5"];
  return (
    <ul>
      {items.map((item) => (
        <Link to={`${item}`} key={item}>
          {item}
        </Link>
      ))}
    </ul>
  );
};

export default Movies;
