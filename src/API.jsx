import axios from "axios"; 

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'c1939bb7c6721a3e91e208cbffe74720';
const TRENDING_MOVIES = 'https://api.themoviedb.org/3/trending/movie/day';
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
 export const IMG_URL = 'https://image.tmdb.org/t/p/w500';


export async function fetchTrendingMovies() {
    const {data} = await axios.get(TRENDING_MOVIES, {
        params: {
            api_key:  API_KEY,
        }
    })
    return data.results;
}

export async function fetchMovies(request) {
    if (request !== "") {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                query: request,
                page: 1,
            }
        }
        )

        return response;
    }
}

export async function fetchMovie (id) {
     
        const response = await axios.get(`${MOVIE_URL}${id}`, {
            params: {
                api_key: API_KEY,
               
            
        }
    })
        return response.data;
        
    };
