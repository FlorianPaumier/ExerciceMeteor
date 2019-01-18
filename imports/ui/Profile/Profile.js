import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AppContext} from "../../context/AppContext";
import '../../../client/assets/styles/Header.css';
import '../../../client/assets/styles/tables.css';

export default class Profile extends Component{

    render() {
        return (
            <AppContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <h1>Profile</h1>
                    </React.Fragment>
                )}
            </AppContext.Consumer>
        )
    }
};

Profile.contextType = AppContext;
