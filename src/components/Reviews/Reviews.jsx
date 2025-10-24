import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { ListItem } from "./Reviews.styled";
import { getMovieReviews } from "../../services/movies-api";

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ellipsis, setEllipsis] = useState(true);
  const { Title, Paragraph } = Typography;
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await getMovieReviews(movieId);
        console.log(data.results);
        setItems((prevItems) => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const isInfo = Boolean(items.length);

  const elements = items.map(({ id, author, content }) => (
    <ListItem key={id}>
      <Title level={4}>{author}</Title>

      <Paragraph
        ellipsis={
          ellipsis ? { rows: 2, expandable: true, symbol: "more" } : false
        }
      >
        {content}
      </Paragraph>
    </ListItem>
  ));

  return (
    <div>
      <Title level={3}>Reviews</Title>
      {isInfo && <ul>{elements}</ul>}
      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
    </div>
  );
};

export default Reviews;
