import React, {Fragment} from 'react';
import { Router, Route, Switch } from 'react-router';
import {AppProvider } from "../../context/AppContext";

//Route component
import StudentContainer from "../../ui/Student/StudentContainer";
import Student from "../../ui/Student/Student";
import LoginContainer from "../../ui/Connexion/LoginContainer";
import RegisterContainer from "../../ui/Connexion/RegisterContainer";

import Header from '../../ui/Header/Header';
import {createBrowserHistory} from "history";
import HomeContainer from "../../ui/Home/HomeContainer";
import Profile from "../../ui/Profile/Profile";
import {withTracker} from "meteor/react-meteor-data";
import ExerciceContainer from "../../ui/Exercice/ExerciceContainer";

const browserHistory = createBrowserHistory();


export const renderRoutes = () => (
    <AppProvider>
        <Router history={browserHistory}>
            <Fragment>
                <Header/>
                <Route exact path={"/"} component={HomeContainer} />
                <Route exact path={"/students"} component={StudentContainer} />
                <Route exact path={"/student/:id"} component={Student} />
                <Route exact path={"/Exercice/:id"} component={ExerciceContainer} />
                <Route exact path={"/profile"} component={Profile}/>
                <Route exact path={"/login"} component={LoginContainer}/>
                <Route exact path={"/logout"} component={LoginContainer}/>
                <Route exact path={"/signin"} component={RegisterContainer}/>
            </Fragment>
        </Router>
    </AppProvider>
);
