import React from 'react';
import web2 from "../image/image2.svg";
import Hero from "../Component/Hero";


const About = () => {
    return(
        <>
            <Hero name="Welcome to About page" imgsrc={web2} visit="/Contact" btnname="Contact Now" />
        </>
    );
};

export default About;