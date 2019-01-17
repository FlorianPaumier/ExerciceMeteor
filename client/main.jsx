import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {renderRoutes} from "../imports/startup/client/routes";
import { Users} from "../imports/api/users";
import { students} from "../imports/api/students";

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
});
