import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/movies-api";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getMovieReviews(movieId);
        console.log(data.results);
        setItems((prevItems) => [...prevItems, ...data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const isInfo = Boolean(items.length);

  const elements = items.map(({ id, author, content }) => (
    <li key={id}>
      <p>
        <b>{author}</b>
      </p>
      <p>{content}</p>
    </li>
  ));

  return (
    <div>
      {isInfo && <ul>{elements}</ul>}
      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
    </div>
  );
};

export default Reviews;
