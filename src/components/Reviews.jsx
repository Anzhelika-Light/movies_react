import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/movies-api";

const Reviews = () => {
  const { movieId } = useParams();

  //   useEffect(() => {}, []);

  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
