import React from "react";
import { Helmet } from "react-helmet";

const Particle = () => {
    return (
        <div>
            <div id="particles-js" />
            <Helmet>
                <script src="/js/particles.js" type="text/javascript" />
                <script src="/js/particles-settings-2.js" type="text/javascript" />
            </Helmet>
        </div>
    );
};

export default Particle;