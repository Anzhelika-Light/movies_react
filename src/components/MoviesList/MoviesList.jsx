import { Link, useLocation } from "react-router-dom";
import { List } from "./MoviesList.styled";

const MoviesList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));

  return <List>{elements}</List>;
};
export default MoviesList;
