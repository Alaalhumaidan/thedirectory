import {DataWrapper} from "./styles";
import {Link} from "react-router-dom";

const Items = (props)=>{

    return(
        <DataWrapper>
<Link to = {`/data/${props.data.slug}`}>
            <img
            alt ={props.data.name}
            src={props.data.image}
             
            />
            </Link>
            <p> {props.data.name} </p>
        </DataWrapper>
    );
}
export default Items;