import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Author from "./component/author";
import Category from "./component/category";
import Collections from "./component/collection";
import Cryptocurrency from "./component/crypto";
import Keyboard from "./component/keyboard";
import Owner from "./component/owner";
import Price from "./component/price";

const FilterPage = () => {
    return(
        <div>
            <Router>
                <Switch>      
                    <Route exact path="/ategory" component={Category} />
                    <Route exact path="/price" component={Price} />
                    <Route exact path="/author" component={Author} />
                    <Route exact path="/wwner" component={Owner} />
                    <Route exact path="/collections" component={Collections} />
                    <Route exact path="/keyboard" component={Keyboard} />
                    <Route exact path="/cryptocurrency" component={Cryptocurrency} />
                </Switch>
            </Router>
        </div>        
    )
}

export default FilterPage