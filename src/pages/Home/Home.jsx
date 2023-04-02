import { useState, useEffect,  } from "react";
import { useLocation } from "react-router-dom";

import { fetchTrendingMovies } from "API";
import {Title, MoviesList, MovieItem, StyledLinks } from "./HomeStyled";


 const Home = () => {
    const [trandingMovies, setTrandingMovies] = useState([]);
    
    const location = useLocation();

    useEffect(() => {
        
            fetchTrendingMovies()
            .then(data => setTrandingMovies(data))
            
        
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