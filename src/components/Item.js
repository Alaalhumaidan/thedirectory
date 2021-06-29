import { DataWrapper } from "../styles";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <DataWrapper>
      <Link to={`/movies/${props.movie.slug}`}>
        <img alt={props.movie.name} src={props.movie.image} />
      </Link>
      <p> {props.movie.name} </p>
    </DataWrapper>
  );
};
export default Item;
