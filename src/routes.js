import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Cracha from "./pages/Cracha";

export default function Rotas() {
  return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cracha" element={<Cracha/>} />
      </Routes>
  );
}

