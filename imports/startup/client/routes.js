import React, {Fragment} from 'react';
import { Router, Route, Switch } from 'react-router';

//Route component
import StudentContainer from "../../ui/Student/StudentContainer";
import LoginContainer from "../../ui/Connexion/LoginContainer";
import RegisterContainer from "../../ui/Connexion/RegisterContainer";

import Header from '../../ui/Header/Header';
import {createBrowserHistory} from "history";
import HomeContainer from "../../ui/Home/HomeContainer";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Fragment>
            <Header/>
            <Route exact path={"/"} component={HomeContainer}/>
            <Route exact path={"/students"} component={StudentContainer}/>
            <Route exact path={"/login"} component={LoginContainer}/>
            <Route exact path={"/logout"} component={LoginContainer}/>
            <Route exact path={"/signin"} component={RegisterContainer}/>
        </Fragment>
    </Router>
);



