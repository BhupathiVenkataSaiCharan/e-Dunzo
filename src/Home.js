import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
        
const Home = () =>{
    return(
    <>
        <Common name="Grow your business with" visit="/service" btnname="Get Started"/>
    </>
    );
};

export default Home;