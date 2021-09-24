import React, {Component} from "react";

// Import components
import Hero from "./components/hero";
import NFTS from "./components/nfts";
import Popular from "./components/popular";
import Work from "./components/work";
import Collections from "./components/collections";

function HomePage(){
    
    return (
        <div>            
            <Hero />
            <NFTS />
            <Collections />
            <Popular />
            <Work />            
        </div>
    );
    
}

export default HomePage;