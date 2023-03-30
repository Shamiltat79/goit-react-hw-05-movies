import { useLocation } from "react-router-dom"
import { MovieLink, MovieItems } from "./MovieItemStyled"
const MovieItem = ({movies}) => {
const location = useLocation();
    return(
        <>
{movies.map((movie) => <MovieLink to={`${movie.id}`} key={movie.id} state={{from: location}}><MovieItems>{movie.title}</MovieItems></MovieLink>)}
        </>
    )
}

export default MovieItem;