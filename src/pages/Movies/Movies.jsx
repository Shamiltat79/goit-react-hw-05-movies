import { useState, useRef, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "components/SearchBar/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { fetchMovies } from "API";
import { MoviesList } from "./MoviesStyled";
import MovieItem from "../../components/MovieItem/MovieItem";


const Movies = () => {

const [movies, setMovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('request') ?? "";
// const location = useLocation();
const isFirstRender = useRef(false);


const searchSubmit = (request) => {
if(request.trim() === ''){
    toast.warning("Please, enter search movie!")
    return;
    }
    setSearchParams({request});
}

useEffect(() => {
  if(!query){
    return;
}
    async function gethMovies(){
        try {
         const {data}= await fetchMovies(query);
         setMovies(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    gethMovies();
    isFirstRender.current = true;
}, [query]);

console.log(movies);

    return (<>
        <SearchBar onSubmit={searchSubmit}/>
<MoviesList>
    <MovieItem movies={movies}/>
</MoviesList>
        <ToastContainer
             theme="colored"/>
             </>
    )
   
};

export default Movies;


