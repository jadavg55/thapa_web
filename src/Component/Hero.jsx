import React from 'react';
import web from "../image/img1.svg";
import {Button} from 'react-bootstrap';


const Hero = (props) => {
    return(
        <>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto py-5">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1">
                                <h1>{props.name} <strong className="brand-name">Thapa Web</strong></h1>
                                <h5 className="my-4">We are the team of a talented developer for making websites</h5>
                                <div className="my-4">
                                    <Button href={props.visit} size="lg" variant="outline-primary">{props.btnname}</Button>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="home img" />

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;