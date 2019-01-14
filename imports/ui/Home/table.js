import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from "../../api/users";

export class Table extends Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Github</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users.map(user => (
                            <tr key={user._id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.githubLink}</td>
                                <td>
                                    <button data-id={user._id} onClick={this.deleteUser}>Delete</button>
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
        Users.remove(id);
    }
};

export default withTracker(() => {
    return {
        users: Users.find().fetch()
    };
})(Table);
