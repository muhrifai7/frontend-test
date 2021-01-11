
/**
 * main route component
 */

import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// nodejs library to set properties for components

// My components
import Navbars from "../component/navbars/navbar"
import Employes from "./employes"
import Beranda from "./beranda"
import Attedance from "./attedance"

const Index = () => {
    return (
        <>
            <Router>
                <Navbars />
                <Switch>
                    <Route path='/' exact component={Beranda} />
                    <Route path='/employes' exact component={Employes} />
                    <Route path='/attendance' exact component={Attedance} />
                </Switch>
            </Router>
        </>
    )
}

export default Index