import { DetailWrapper } from "../styles";
import { useParams } from "react-router";

const Details = (props) => {
  const movieSlug = useParams().movieSlug;
  const movie = props.movies.find((movie) => movie.slug === movieSlug);

  return (
    <DetailWrapper>
      <img src={movie.image} alt={movie.name} />
      <p>{movie.name}</p>
      <p>{movie.released}</p>
      <p>{movie.runtime}</p>
      <p>{movie.genre}</p>
      <p>{movie.plot}</p>
    </DetailWrapper>
  );
};
export default Details;
