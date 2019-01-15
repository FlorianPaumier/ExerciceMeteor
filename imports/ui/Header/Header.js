import React from 'react';
import { Link } from "react-router-dom";
import '../../../client/assets/styles/Header.css';
import '../../../client/assets/styles/tables.css';

const Header = () => (
    <section id={"Header"}>
        <div className={"Header"}>
            <div className={"brand-header"}>
                <Link to={'/'}><button>Accueil</button></Link>
            </div>
            <div className={"mt-3"}>
                <Link to={'/login'}><button>Log in</button></Link>
                <Link to={'/logout'}><button>Log out</button></Link>
                <Link to={'/signin'}><button>Sign in</button></Link>
                <Link to={'/students'}><button>Dashboard</button></Link>
            </div>
        </div>
        <div className="burger-menu">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    </section>
);


export default Header;
