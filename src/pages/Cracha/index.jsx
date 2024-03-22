import React from "react";
import Home from "../Home";
import { useLocation } from "react-router-dom";
const Cracha = () => {
 const location = useLocation();
 const {pessoa} = location.state;

return(
    <>
    <div>{pessoa}</div>
    </>
);

}

export default Cracha;