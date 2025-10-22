import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/movies-api";
import { useState, useEffect } from "react";
import { Typography } from "antd";
import { Col, Row } from "antd";

import { ListItem } from "./Reviews.styled";

const { Title } = Typography;

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rows, setRows] = useState(2);
  const [expanded, setExpanded] = useState(false);
  const [ellipsis, setEllipsis] = useState(true);
  const { Title, Paragraph, Text } = Typography;
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
    <ListItem key={id}>
      <Title level={4}>{author}</Title>

      {/* <Typography.Paragraph
        ellipsis={{
          rows,
          expandable: "collapsible",
          expanded,
          onExpand: (_, info) => setExpanded(info.expanded),
        }}
      >
        {content}
      </Typography.Paragraph> */}

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
