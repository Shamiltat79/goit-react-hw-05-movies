import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import SearchBar from "./SearchBar/SearchBar";
import SharedLayout from "./SharedLayout/SharedLayout";

import  Home from "pages/Home/Home";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<div>Movies</div>} />



      </Route>
        
      
      
    </Routes>
   
  );
};
