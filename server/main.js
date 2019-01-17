import { Meteor } from 'meteor/meteor';
import { students } from "../imports/api/students";
import { Users} from "../imports/api/users";
import {Accounts} from "meteor/accounts-base";

Meteor.startup(() => {
    Meteor.publish('roles', function (){
        return Meteor.roles.find({})
    });
    Meteor.publish('users', function (){
        return Meteor.user.find({})
    });
});
