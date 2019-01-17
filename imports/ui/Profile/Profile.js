import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {AuthentificationContext} from "../../context/AuthentificationContext";
import '../../../client/assets/styles/Header.css';
import '../../../client/assets/styles/tables.css';

export default class Profile extends Component{

    render() {
        return (
            <AuthentificationContext.Consumer>
                {(context) => (
                    <React.Fragment>
                        <h1>Profile</h1>
                    </React.Fragment>
                )}
            </AuthentificationContext.Consumer>
        )
    }
};

Profile.contextType = AuthentificationContext;
