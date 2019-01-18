import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {students} from "../../api/students";
import {Meteor} from "meteor/meteor";
import createHistory from 'history/createBrowserHistory'
import { Link } from "react-router-dom";

export class Table extends Component {

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
        return (
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Github</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.exercices.map(exerice => (
                            <tr key={exerice._id}>
                                <td>{exerice.name}</td>
                                <td>
                                    <Link to={"/Exerice/" + student._id}>
                                        <button data-id={student._id}>Voir</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        );
    }

    deleteExercice = (e) => {
        let id = e.currentTarget.getAttribute("data-id");
        Meteor.call('exercices.remove',id);
    }

};

export default withTracker(() => {
    return {
        exercices: exercices.find().fetch(),
        user: Meteor.user()
    };
})(Table);
