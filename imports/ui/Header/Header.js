import React from 'react';
import '../../../client/assets/styles/Header.css';
import '../../../client/assets/styles/tables.css';

const Header = () => (
    <section id={"Header"}>
        <div className={"Header"}>
            <div className={"brand-header"}>
                <button>Mon Portfolio</button>
            </div>
            <div className={"mt-3"}>
                <button >
                    <div>Mes projets</div>
                </button>
                <button >
                    <div>Présentation</div>
                </button>
                <button >
                    <div>Mon entreprise</div>
                </button>
                <button >
                    <div>Me contacter</div>
                </button>
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
