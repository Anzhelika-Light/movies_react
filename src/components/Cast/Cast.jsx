import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import { Typography } from "antd";
import { BackgroundImg } from "./Cast.styled";
import { getMovieCredits } from "../../services/movies-api";

const { Title } = Typography;

const style = {
  background: "transparent",
  padding: "0 0 8px",
  textAlign: "center",
};

const Cast = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getMovieCredits(movieId);
        setItems((prevItems) => [...prevItems, ...data.cast]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const isInfo = Boolean(items.length);

  const elements = items.map(({ id, profile_path, name, character }) => (
    <Col className="gutter-row" span={6} key={id}>
      <div style={style}>
        <BackgroundImg bg={profile_path} />
        <p>{name}</p>
        <p>{character}</p>
      </div>
    </Col>
  ));

  return (
    <div>
      <Title level={3}>Cast</Title>
      {isInfo && <Row gutter={[16, 24]}>{elements}</Row>}

      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
    </div>
  );
};

export default Cast;
