import { ListWrapper } from "./styles";
import Items from "./Items";
import SearchBar from "./SearchBar";
import { useState } from "react";

const List = (props) => {
    const [query, setQuery] = useState("");
    
    const List = props.data
    .filter((_data)=> _data.name.toLowerCase().includes(query.toLowerCase()))
    .map((_data)=>  <Items dataa={_data}/>)
console.log(List);
return(
    <div>
     <SearchBar setQuery={setQuery}/>
        <ListWrapper>
        <h1>Hello</h1>
        </ListWrapper>
    </div>
);
};
export default List;