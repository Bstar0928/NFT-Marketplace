import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MetamaskStateProvider } from "use-metamask";

// Import components
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import useToken from './useToken';
import HomePage from "./home";
import SignInPage from "./signin";
import SignUpPage from "./signup";
import ProfilePage from "./profile";
import WalletPage from "./wallet";
import FilterPage from "./Filter";
import CollectionInfo from "./collection";

function MainPage(){
    
    const { token, setToken } = useToken();

    return (
        <div className="dark-scheme">    
            <MetamaskStateProvider>
                <Navbar token={token}/>            
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/signin/" component={SignInPage} />
                        <Route exact path="/signup/" component={SignUpPage} />
                        <Route exact path="/profile/" component={ProfilePage} />
                        <Route exact path="/wallet/" component={WalletPage} />
                        <Route exact path="/filter/" component={FilterPage}/>  
                        <Route exact path="/collectioninfo/" component={CollectionInfo}/>                        
                    </Switch>
                </Router>
                <Footer />
            </MetamaskStateProvider>
        </div>
    );
    
}

export default MainPage;