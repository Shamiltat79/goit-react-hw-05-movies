import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import SearchBar from "./SearchBar/SearchBar";
import Movies from "pages/Movies/Movies";
import SharedLayout from "./SharedLayout/SharedLayout";

import  Home from "pages/Home/Home";
import Cast from "./Cast/Cast";


const Movie = lazy(() => import( "../pages/Movie/Movie" ))
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
        </Route>
        
        
      </Route>
        
      
      
    </Routes>
   
  );
};
