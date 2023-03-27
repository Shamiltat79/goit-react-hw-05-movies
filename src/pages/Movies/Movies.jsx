import { useState, useRef, useEffect} from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "components/SearchBar/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { fetchMovies } from "API";
import { MoviesList, MovieItems, MovieLink  } from "./MoviesStyled";



const Movies = () => {

const [movies, setmovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const movie = searchParams.get('request') ?? "";
const location = useLocation();
const isFirstRender = useRef(false);
const searchSubmit = (request) => {
if(request.trim() === ''){
    toast.warning("Please, enter search movie!")
    return;
    }
    setSearchParams({request});
}

useEffect(() => {
  if(movie){
   fetchMovies(movie)
   .then(data => setmovies(data));  
  }
isFirstRender.current = true;
 
}, [movie]);



    return (<>
        <SearchBar onSubmit={searchSubmit}/>
<MoviesList>
    {movies.map((movie) => <MovieLink to={`${movie.id}`} key={movie.id} state={{from: location}}><MovieItems>{movie.title}</MovieItems></MovieLink>)}
</MoviesList>
        <ToastContainer
             theme="colored"/>
             </>
    )
   
};

export default Movies;


