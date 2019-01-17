import React, { Component } from 'react';

export const AuthentificationContext = React.createContext();

export class AuthentificationProvider extends Component {

    constructor(props){
        super(props);
        this.state = this.getMeteorData();
    }

    getMeteorData(){
        return {
            isAuthenticated: Meteor.userId() !== null,
            user: Meteor.userId()
        };
    }

    componentDidUpdate(): void {
        this.state = this.getMeteorData();
    }

    render() {
        return (
            <AuthentificationContext.Provider value={{
                state : this.state
            }}>
                {this.props.children}
            </AuthentificationContext.Provider>
        );
    }
}
