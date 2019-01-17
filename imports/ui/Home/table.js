import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {students} from "../../api/students";

export class Table extends Component {

    componentWillMount() {
        Meteor.subscribe('students');
    }

    render() {
        return (
            <div>
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
                                    <button data-id={student._id} onClick={this.deleteUser}>Delete</button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        );
    }

    deleteUser = (e) => {
        let id = e.currentTarget.getAttribute("data-id");
        Meteor.call('students.remove',id);
    }
};

export default withTracker(() => {
    return {
        students: students.find().fetch()
    };
})(Table);
