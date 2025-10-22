import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import { getMovieCredits } from "../../services/movies-api";
import { useState, useEffect } from "react";
import { BackgroundImg } from "./Cast.styled";
import { Typography } from "antd";

// import posterMissingPath from "../assets/Poster_missing.png";

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
        {/* <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : posterMissingPath
          }
          alt={`${name} photo`}
        /> */}

        <BackgroundImg bg={profile_path} />
        <p>{name}</p>
        <p>{character}</p>
      </div>
    </Col>
  ));
  console.log(items);

  return (
    <div>
      <Title level={3}>Cast</Title>
      {isInfo && (
        // <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>{elements}</Row>
        <Row gutter={[16, 24]}>{elements}</Row>
      )}

      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}
    </div>
  );
};

export default Cast;
