import React from 'react';
import { Router, Route, Switch } from 'react-router';

//Route component
import StudentContainer from "../../ui/Student/StudentContainer";

import Header from '../../ui/Header/Header';
import {createBrowserHistory} from "history";
import HomeContainer from "../../ui/Home/HomeContainer";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Header/>
            <Route exact path={"/"} component={HomeContainer}/>
            <Route exact path={"/students"} component={StudentContainer}/>
        </Switch>
    </Router>
);



