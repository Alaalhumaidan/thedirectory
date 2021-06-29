import { DetailWrapper } from "./styles";
// import data from "./data";
import { useParams } from "react-router";

const Details = (props) => {
    const dataSlug = useParams().dataSlug;
    const data = props.data.find((data) => data.slug === dataSlug);
   return ( 
        <DetailWrapper>
            <img src={data.image} 
                 alt={data.name}/>
            <p>{data.name}</p>
            <p>{data.released}</p>
            <p>{data.runtime}</p>
            <p>{data.genre}</p>
            <p>{data.plot}</p>
         
        </DetailWrapper>
    
    );
};
export default Details;

// <button type="button" class="btn btn-light">Light</button>