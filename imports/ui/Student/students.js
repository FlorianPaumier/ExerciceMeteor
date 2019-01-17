import React, { Component } from 'react';
import { Users } from "../../api/users";
import { students } from "../../api/students";

class Students extends Component {

    render() {
        return (
            <div>
                <label htmlFor="firstName">
                    First Name :
                    <input name={"firstName"} id={"firstName"} type="text"/>
                </label>
                <label htmlFor="lastName">
                    Last Name :
                    <input type="text" name={"lastName"} id={"lastName"}/>
                </label>
                <label htmlFor="githubLink">
                    Github link :
                    <input type="text" name={"githubLink"} id={"githubLink"}/>
                </label>
                <button onClick={this.addStudent}>Valider</button>
            </div>
        );
    }

    addStudent = () => {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let github = document.getElementById("githubLink").value;

        if(firstName !== "" && lastName  !== "" && github  !== ""){
            Meteor.call('students.insert', firstName, lastName, github);
        };
    }
}

export default Students;
