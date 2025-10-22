import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { Typography } from "antd";
import { BackgroundPoster } from "../components/MoviesList/MoviesList.styled";
import Container from "../components/Container";
import { getMovieDetails } from "../services/movies-api";

import { StyledLink } from "./MovieDetails.styled";

import { Col, Row } from "antd";

const MovieDetails = () => {
  const [rows, setRows] = useState(2);
  const [expanded, setExpanded] = useState(false);

  const { Title, Paragraph, Text } = Typography;
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setItem(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path } = item;

  return (
    <Container>
      <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>

      <Row justify="start" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          {/* <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={`poster of ${title} movie`}
          /> */}
          <BackgroundPoster bg={poster_path} />
        </Col>
        <Col span={18}>
          <div>
            <Paragraph copyable strong style={{ fontSize: "38px" }}>
              {title}
            </Paragraph>

            <div>
              <Text strong>User score: </Text>
              {vote_average}
            </div>
            <div>
              <Text strong>Overview: </Text>
              <Typography.Paragraph
                ellipsis={{
                  rows,
                  expandable: "collapsible",
                  expanded,
                  onExpand: (_, info) => setExpanded(info.expanded),
                }}
              >
                {overview}
              </Typography.Paragraph>
            </div>
            <div>
              <Text strong>Genres: </Text>
              {genres?.map(({ name }) => name).join(", ")}
            </div>
          </div>
        </Col>
      </Row>

      {loading && <p>...loading</p>}
      {error && <p>Oops! Something went wrong. Try again later, please.</p>}

      <Title level={2}>Additional information</Title>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
