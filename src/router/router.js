import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import HomePage from "../pages/home";
import SignInPage from "../pages/signin";
import SingUpPage from "../pages/signup";
import ProfilePage from '../pages/profile'
import WalletPage from '../pages/wallet'
import { MetamaskStateProvider } from "use-metamask";
import FilterPage from "../pages/Filter";
function MyRoots(){
    
    return (
        <div>
            <Router>
                <Switch>
                    <MetamaskStateProvider>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/signin/" component={SignInPage} />
                        <Route exact path="/signup/" component={SingUpPage} />
                        <Route exact path="/profile/" component={ProfilePage} />
                        <Route exact path="/wallet/" component={WalletPage} />
                        <Route exact path="/Filter/" component={FilterPage}/>                        
                    </MetamaskStateProvider>
                </Switch>
            </Router>
        </div>
    );
}

export default MyRoots;