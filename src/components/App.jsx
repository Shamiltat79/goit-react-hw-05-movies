import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import Movies from "pages/Movies/Movies";
import SharedLayout from "./SharedLayout/SharedLayout";

// import  Home from "pages/Home/Home";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";


const Movie = lazy(() => import( "../pages/Movie/Movie" ));
const Home = lazy(() => import("../pages/Home/Home"));
const Cast = lazy(() => import("../components/Cast/Cast") );
const Reviews = lazy(() => import("../components/Reviews/Reviews"))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Route>
        
      
      
    </Routes>
   
  );
};
