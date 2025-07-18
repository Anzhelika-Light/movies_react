import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/movies-api";

const Cast = () => {
  const { movieId } = useParams();

  //   useEffect(() => {}, []);

  return <div>Cast: {movieId}</div>;
};

export default Cast;
