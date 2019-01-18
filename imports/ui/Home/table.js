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
                        this.props.students.map(student => (
                            <tr key={student._id}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.githubLink}</td>
                                <td>
                                    {this.props.user && this.props.user.roles.indexOf('admin') === -1 && (
                                        <button data-id={student._id} onClick={this.deleteUser}>Delete</button>
                                    )}
                                    <Link to={"/student/" + student._id}> <button data-id={student._id} onClick={this.showStudent}>Voir</button></Link>

                                </td>
                            </tr>
                        )
                        )
                    }
                    </tbody>
                </table>
        );
    }

    deleteUser = (e) => {
        let id = e.currentTarget.getAttribute("data-id");
        Meteor.call('students.remove',id);
    }

};

export default withTracker(() => {
    return {
        students: students.find().fetch(),
        user: Meteor.user()
    };
})(Table);
