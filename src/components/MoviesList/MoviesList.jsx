import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "antd";
const style = { background: "#bbd4e8ff", padding: "0 0 8px" };
import { Img, Title } from "./MoviesList.styled";
import { BackgroundImg } from "./MoviesList.styled";

const MoviesList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, poster_path, backdrop_path }) => (
    <Col className="gutter-row" span={6} key={id}>
      <div style={style}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <BackgroundImg
            bg={poster_path}
            // style={{
            //   backgroundImage: `url(${
            // poster_path
            //   ? `https://image.tmdb.org/t/p/w200${poster_path}`
            //   : posterMissingPath
            //   })`,
            // }}
          />
          {/* <Img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : posterMissingPath
            }
            alt={`Poster of ${title}`}
          /> */}

          <Title>{title}</Title>
        </Link>
      </div>
    </Col>
  ));
  return (
    <>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>{elements}</Row>
    </>
  );
};

export default MoviesList;
