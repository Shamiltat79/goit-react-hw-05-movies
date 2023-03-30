import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { fetchCast  } from "API";
import { CastList, CastItem } from "./CastStyled";
import dummy from "../../../src/dummy.jpeg";

const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const {id} = useParams();
    const isFirstRender = useRef(true);

    useEffect(() => {
    if(isFirstRender.current) {

        async function getCast() {
            try {
                const {data} = await fetchCast(id) 
                setCast(data.cast)
                 
            } catch (error) {
               console.log(error) 
            }
            
        }
        
        getCast();

       
    } 
    
    }, [id])
    

    return(
    <CastList>
        {cast.map(el => (
        <CastItem key={el.id}>
            <img src={el.profile_path ? IMG_URL + el.profile_path : dummy } alt='' />
            <p>{el.name}</p>
            <p>{el.character}</p>

        </CastItem>))}
        
    </CastList>
    )
}
export default Cast;