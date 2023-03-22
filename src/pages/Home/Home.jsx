import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchTrendingMovies } from "API";
import {Title, MoviesList, MovieItem } from "./HomeStyled";
import css from 'pages/Home/Home.module.css';

export const Home = () => {
    const [trandingMovies, settrandingMovies] = useState([]);
    const isFirstRender = useRef(true);
    const locationHome = useLocation();

    useEffect(() => {
        if(isFirstRender.current){
            fetchTrendingMovies()
            .then(data => settrandingMovies(data))
            isFirstRender.current = false;
        }
    }, [])
    return( <>
    <Title>Trending today</Title>
        <MoviesList>
           {trandingMovies.map((movie) =>  <Link to={`movies/${movie.id}`} key={movie.id}  state={{from: locationHome}} className={css.searchLink} ><MovieItem>{movie.title}</MovieItem></Link>)} 
        </MoviesList>
        </>
        
    )
};
