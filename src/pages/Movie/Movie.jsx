import { useState, useRef, useEffect, Suspense,  } from "react";
import { useLocation, useParams, Outlet, NavLink } from "react-router-dom";
import {FaArrowAltCircleLeft} from 'react-icons/fa';

import { fetchMovie, IMG_URL } from "API";
import { Wrapper, Poster, Info, GoBackLink } from "./MovieStyled";

const Movie = () => {
    const [movie, setMovie] = useState({});
    const [genres, setGenre] = useState('');
    const isFirstRender = useRef(true);
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        if (isFirstRender.current){
            fetchMovie(id)
            .then(data => {
                setMovie(data);
                setGenre(data.genres.map(genre => genre.name + ""))
                
            })
            
        }
      
      }
    
           
    , [id])
    



    return(<>
        <GoBackLink to={location.state?.from ?? '/'}><FaArrowAltCircleLeft fill="orangered"/></GoBackLink>
        <Wrapper>
            <Poster><img src={IMG_URL + movie.poster_path}alt="" width="300" /></Poster>
            <Info>
                <h2>{movie.title}</h2>
                <p>{`${Math.round(movie.vote_average*10)}%`}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
            </Info>
        </Wrapper>

        <ul ><li><NavLink to="cast" state={{from: location.state?.from}}>Cast</NavLink></li>
            <li><NavLink to="reviews" state={{from: location.state?.from}}>Reviews</NavLink></li></ul>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
        </>
    );
}
export default Movie;