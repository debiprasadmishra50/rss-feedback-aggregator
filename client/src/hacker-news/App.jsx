import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import News from "./components/News";

const App = () => {
    return (
        <div className="ui container">
            <Router>
                <Header />
                <div>
                    <Route exact path="/">
                        <News link="/topstories.json" />
                    </Route>
                    <Route exact path="/latest">
                        <News link="/newstories.json" />
                    </Route>
                    <Route exact path="/best">
                        <News link="/beststories.json" />
                    </Route>
                </div>
            </Router>
        </div>
    );
};

export default App;
