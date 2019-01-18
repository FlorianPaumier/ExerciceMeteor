import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AppContext, AuthentificationProvider} from "../../context/AppContext";
import '../../../client/assets/styles/Header.css';
import {withTracker} from "meteor/react-meteor-data";
import createHistory from "history/createBrowserHistory";

export class Header extends Component {


    history = createHistory();

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

                this.history.push('/login');
            }
        });
    };

    render() {
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
                                <Link to={'/students'}>
                                    <button>Dashboard</button>
                                </Link>
                                <Link to={'/profile'}>
                                    <button>Profile</button>
                                </Link>
                                {this.props.user && this.props.user.roles && (
                                    <span>
                                    {(this.props.user.roles.includes("admin") > -1 || this.props.user.find.includes("teacher") > -1) && (
                                        <Link to={'/Exercice'}>
                                            <button>Exercice</button>
                                        </Link>
                                    )}
                                    </span>

                                )}
                                <Link to={'/logout'}>
                                    <button onClick={this.logout}>Log out</button>
                                </Link>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                <div className="burger-menu">
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
        isAuthenticated: Meteor.userId() !== null,
        user: Meteor.user()
    };
})(Header);

Header.contextType = AppContext;
