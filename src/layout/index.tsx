import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbars from "../component/navbars/navbar"
import Home from "./home"

const Index = () => {
    return (
        <>
            <Router>
                <Navbars />
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </Router>
        </>
    )
}

export default Index