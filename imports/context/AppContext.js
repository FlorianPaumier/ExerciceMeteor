import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {

    constructor(props){
        super(props);
        this.state = this.getMeteorData();
    }

    getMeteorData(){
        return {
            isAuthenticated: Meteor.userId() !== null,
            user: Meteor.userId(),
            roles : ["admin", "teacher", "student"]
        };
    }

    componentDidUpdate(): void {
        this.state = this.getMeteorData();
    }

    render() {
        return (
            <AppContext.Provider value={{
                state : this.state
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
