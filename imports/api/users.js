
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import {students} from "./students";
import {Accounts} from "meteor/accounts-base";

export const profile = new Mongo.Collection('profile');

Meteor.methods({
    'roles.add'(userId, roles) {
        check(userId, String);
        check(roles, Array);

        Roles.addUsersToRoles(userId, roles);
    },
    'roles.find'() {

        return Roles.getAllRoles();
    },
    'profile.insert'(username, password) {

        // Make sure the user is logged in before inserting a task
        if (profile.find({username: username}).fetch().length !== 0) {
            throw new Meteor.Error('Already Exist');
        }

        profile.insert({
            username: username,
            password: password,
        });
    },
    'profile.remove'(userId) {
        check(userId, String);

        profile.remove(userId);
    },
    'profile.setChecked'(userId, setChecked) {
        check(userId, String);
        check(setChecked, Boolean);

        profile.update(userId, {$set: {checked: setChecked}});
    }
});
