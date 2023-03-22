import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { fetchTrendingMovies } from "API";
import {Title, MoviesList, MovieItem, StyledLinks } from "./HomeStyled";


 const Home = () => {
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
           {trandingMovies.map((movie) =>  <StyledLinks to={`movies/${movie.id}`} key={movie.id}  state={{from: locationHome}}  ><MovieItem>{movie.title}</MovieItem></StyledLinks>)} 
        </MoviesList>
        </>
        
    )
};
export default Home;