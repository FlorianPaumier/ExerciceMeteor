import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AppContext, AuthentificationProvider} from "../../context/AppContext";
import '../../../client/assets/styles/Header.css';
import {withTracker} from "meteor/react-meteor-data";

export class Header extends Component {

    constructor(props, context) {
        super(props, context);
    }

    logout = (e) => {
        e.preventDefault();
        Meteor.logout((err) => {
            if (err) {
                console.log(err.reason);
            } else {
                this.setState({
                    isAuthenticated: Meteor.userId() !== null,
                    user: Meteor.userId()
                });

                history.push('/login');
            }
        });
    };

    render() {
        return (
            <section>
                Student
            </section>
        )
    }
};

export default withTracker(() => {
    return {
        isAuthenticated: Meteor.userId() !== null
    };
})(Header);

Header.contextType = AppContext;
