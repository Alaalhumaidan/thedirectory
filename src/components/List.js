import { ListWrapper } from "../styles";
import Item from "./Item";

const List = (props) => {
  const movieList = props.movies.map((movie) => <Item movie={movie} />);

  return <ListWrapper>{movieList}</ListWrapper>;
};
export default List;
