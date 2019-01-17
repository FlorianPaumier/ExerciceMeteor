import React, { Component } from 'react';
import { Users } from "../../api/users";
import "../../../client/assets/styles/log.css";

export default class LoginContainer extends Component {

    constructor(props){
        super(props);

        this.email = React.createRef("");
        this.password = React.createRef("");
    }

    render() {
       return (
           <section className={"form__login"}>
            <form onSubmit={this.login} className={"login"}>
                <label>
                    Email
                    <input type="text" ref={this.email}/>
                </label>
                <label>
                    Mot de passe
                    <input type="password" ref={this.password}/>
                </label>
                <button>Connexion</button>
            </form>
        </section>
       )
    }

    login = async (e) => {
        e.preventDefault();
        Meteor.loginWithPassword(this.email.current.value, this.password.current.value, (res) => {
            console.log(res);
            if(res){
                alert(res.reason);
            }else{
                this.props.history.push("/");
            }

        });

    }

};
