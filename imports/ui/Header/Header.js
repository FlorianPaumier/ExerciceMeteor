import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AuthentificationContext, AuthentificationProvider} from "../../context/AuthentificationContext";
import '../../../client/assets/styles/Header.css';
import {Redirect} from "react-router";
import {withTracker} from "meteor/react-meteor-data";
import {students} from "../../api/students";
import {Table} from "../Home/table";

export class Header extends Component {

    fireRedirect = false;

    toggleHeader(x) {
    }

    componentDidUpdate() {
        let value = this.context;
    }

    componentWillUpdate(): void {
        console.log(this.context);
    }

    componentWillUnmount() {
        let value = this.context;
        console.log(value);
        /* ... */
    }

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
            }
        });
    };

    render() {
        console.log(this.props);
        return (
            <section id={"Header"}>
                <div className={"Header"}>
                    <div className={"brand-header"}>
                        <Link to={'/'}>
                            Accueil
                        </Link>
                    </div>
                    <div className={"mt-3 Header__content"}>
                        {!this.props.isAuthenticated && (
                            <React.Fragment>
                                <Link to={'/login'}>
                                    <button>Log in</button>
                                </Link>
                                <Link to={'/signin'}>
                                    <button>Sign in</button>
                                </Link>
                            </React.Fragment>
                        )}
                        {this.props.isAuthenticated && (
                            <React.Fragment>
                                <Link to={'/logout'}>
                                    <button onClick={this.logout}>Log out</button>
                                </Link>
                                <Link to={'/students'}>
                                    <button>Dashboard</button>
                                </Link>
                                <Link to={'/profile'}>
                                    <button>Profile</button>
                                </Link>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                <div className="burger-menu" onClick={this.toggleHeader}>
                    <div className={`bar1`}></div>
                    <div className={`bar2`}></div>
                    <div className={`bar3`}></div>
                </div>
            </section>
        )
    }
};

export default withTracker(() => {
    return {
        isAuthenticated: Meteor.userId() !== null
    };
})(Header);

Header.contextType = AuthentificationContext;
