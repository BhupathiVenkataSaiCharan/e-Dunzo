import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () =>{
    return(
    <>
        <Common name="welcome to About page" visit="/contact" btnname="Contact Now"/>
    </>
    );
};

export default About;