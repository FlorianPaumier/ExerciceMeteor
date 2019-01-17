import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';
import "../../../client/assets/styles/log.css";
import {Meteor} from "meteor/meteor";

export default class RegisterContainer extends Component {

    constructor(props) {
        super(props);

        this.userName = React.createRef("");
        this.type = React.createRef("");
        this.email = React.createRef("");
        this.emailConfirmation = React.createRef("");
        this.password = React.createRef("");
        this.passwordConfirmation = React.createRef("");

    }

    render() {
        return (
            <section className={"registration"}>
                <h1 align="center">Inscription</h1>
                <form onSubmit={this.addUser} className={"registration__form"}>
                    <div className="row">
                        <div className="col">
                            <label>
                                UserName :
                                <input type="text" ref={this.userName} required={true} placeholder={"enter a pseudo"}/>
                            </label>
                        </div>
                        <div className="col">
                            <label>
                                Type :
                            </label>
                            <div className={"custom-select"}>
                                <select ref={this.type} required={true} placeholder={"choose a type"}>
                                    <option value="admin">Admin</option>
                                    <option value="student">student</option>
                                    <option value="teacher">teacher</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor={"email"}>Email :</label>
                            <input type="email" ref={this.email} id={"email"} required={true}
                                   placeholder={"enter an email"}/>
                        </div>
                        <div className="col">
                            <label>Email Confirm :</label>
                            <input type="email" ref={this.emailConfirmation} required={true}
                                   placeholder={"confirm email"}/>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="col">
                            <label>Mot de passe : </label>
                            <input type="password" ref={this.password} required={true}
                                   placeholder={"enter a password"}/>
                        </div>
                        <div className="col">
                            <label>Mot de passe confirm :</label>
                            <input type="password" ref={this.passwordConfirmation} required={true}
                                   placeholder={"confirm password"}/>
                        </div>
                    </div>
                    <button type="submit">Valider</button>
                </form>
            </section>
        )
    }

    addUser = async (e) => {
        e.preventDefault();
        if (this.userName.current.value !== "") {
            if (this.email.current.value === this.emailConfirmation.current.value) {
                if (this.passwordConfirmation.current.value === this.password.current.value) {
                    Accounts.createUser({
                        username: this.userName.current.value,
                        email: this.email.current.value,
                        password: this.password.current.value
                    }, (err) => {
                        if(err){
                            alert(err.reason)
                        }else{
                            let id = Meteor.userId();
                            Meteor.call('roles.add', id, [this.type.current.value], () => {
                                Meteor.logout();
                                this.props.history.push('/login');
                            });
                        }
                    })


                } else {
                    alert("pwd incorrect");
                }
            } else {
                alert("Email incorrect");
            }
        } else {
            alert("UserName incorrect")
        }

    };
};


