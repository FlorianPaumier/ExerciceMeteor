
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const students = new Mongo.Collection('students');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('students', function getStudents() {
        return students.find();
    });
}

Meteor.methods({
    'students.insert'(firstName, lastName, github ) {
        check(firstName, String);
        check(lastName, String);
        check(github, String);

        // Make sure the user is logged in before inserting a task
        /*if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }*/

        students.insert({
            lastName: lastName,
            firstName: firstName,
            githubLink: github,
            owner: this.userId,
        });
    },
    'students.remove'(studentId) {
        check(studentId, String);

        students.remove(studentId);
    },
    'students.setChecked'(studentId, setChecked) {
        check(studentId, String);
        check(setChecked, Boolean);

        students.update(studentId, { $set: { checked: setChecked } });
    },
});
