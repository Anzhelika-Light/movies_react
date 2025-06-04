import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();

  //   useEffect(() => {}, []);

  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
