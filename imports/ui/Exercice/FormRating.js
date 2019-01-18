import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {students} from "../../api/students";
import {Meteor} from "meteor/meteor";
import createHistory from 'history/createBrowserHistory'
import { Link } from "react-router-dom";

export class FormRating extends Component {

    history = createHistory();

    constructor(props, context) {
        super(props, context);

        if(Meteor.userId() === null || !this.props.user){
            Meteor.logout();
            this.history.push('/login');
        }

    }


    componentWillMount() {
        Meteor.subscribe('students');
    }


    render() {
        console.log(this.props.match.id);

        return (
            <div>

            </div>
        );
    }

};

export default withTracker(() => {
    return {
        students: students.find().fetch(),
        user: Meteor.user()
    };
})(FormRating);
