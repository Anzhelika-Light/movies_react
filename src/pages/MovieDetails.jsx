import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();

  //   useEffect(() => {}, []);

  return <div>Movie details: {movieId}</div>;
};

export default MovieDetails;
