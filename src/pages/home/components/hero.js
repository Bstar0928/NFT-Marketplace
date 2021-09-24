import React from "react";
import Particle from "../../../components/Particle/particle";

const Hero = () => {
    return (
        <section id="section-hero" aria-label="section" className="text-light overflow-hidden" data-bgimage="url(/images/background/2d.jpg) top">
            <Particle />            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="text_top">
                            <div className="spacer-double"></div>
                            <h1>Create and sell your own unique NFTs.</h1>
                            <p className="lead">Easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
                            <div className="spacer-20"></div>
                            <a href="dark-explore.html" className="btn-main">Explore</a>&nbsp;&nbsp;
                            <a href="/signin" className="btn-main btn-white">Create</a>
                            <div className="spacer-double"></div>
                        </div>
                    </div>
                </div>                    
            </div>            
        </section>
    );
};

export default Hero;