
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const exercices = new Mongo.Collection('exercices');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('exercices', function getExercices() {
        return exercices.find();
    });
}

Meteor.methods({
    'exercices.insert'(name) {
        check(name, String);

        // Make sure the user is logged in before inserting a task
        /*if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }*/

        exercices.insert({
            name: name
        });
    },
    'exercices.remove'(studentId) {
        check(studentId, String);

        exercices.remove(studentId);
    },
    'exercices.setChecked'(studentId, setChecked) {
        check(studentId, String);
        check(setChecked, Boolean);

        exercices.update(studentId, { $set: { checked: setChecked } });
    },
});
