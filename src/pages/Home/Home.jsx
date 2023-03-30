import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { fetchTrendingMovies } from "API";
import {Title, MoviesList, MovieItem, StyledLinks } from "./HomeStyled";


 const Home = () => {
    const [trandingMovies, setTrandingMovies] = useState([]);
    const isFirstRender = useRef(true);
    const location = useLocation();

    useEffect(() => {
        if(isFirstRender.current){
            fetchTrendingMovies()
            .then(data => setTrandingMovies(data))
            isFirstRender.current = false;
        }
    }, [])
    return( <>
    <Title>Trending today</Title>
        <MoviesList>
           {trandingMovies.map((movie) =>  <StyledLinks to={`movies/${movie.id}`} key={movie.id}  state={{from: location}}  ><MovieItem>{movie.title}</MovieItem></StyledLinks>)} 
        </MoviesList>
        </>
        
    )
};
export default Home;