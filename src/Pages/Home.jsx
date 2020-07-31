import React from 'react';
import web from "../image/img1.svg";
import {Button} from 'react-bootstrap';
import Hero from "../Component/Hero";



const Home = () => {
    return(
        <>
        <Hero name="Grow your business with" imgsrc={web} visit="/Service" btnname="Get Started" />
        </>
    );
};

export default Home;