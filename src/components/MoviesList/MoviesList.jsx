import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "antd";
const style = { background: "#bbd4e8ff", padding: "0 0 8px" };
import { Img, Title } from "./MoviesList.styled";
import posterMissingPath from "../../assets/Poster_missing.png";

console.log(posterMissingPath);

const MoviesList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, poster_path, backdrop_path }) => (
    <Col className="gutter-row" span={6} key={id}>
      <div style={style}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <Img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : posterMissingPath
            }
            alt=""
          />

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

// const MoviesList = ({ items }) => {
//   const location = useLocation();
//   const elements = items.map(({ id, title }) => (
//     <li key={id}>
//       <Link to={`/movies/${id}`} state={{ from: location }}>
//         {title}
//       </Link>
//     </li>
//   ));

//   return <List>{elements}</List>;
// };
export default MoviesList;
