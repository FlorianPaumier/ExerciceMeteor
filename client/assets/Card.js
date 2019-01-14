import Button from "./Buttons";
import {Panel, Col} from "react-bootstrap";
import React from "react";
import PropTypes from 'prop-types'; // ES6
import { Link } from "react-router-dom";

const Card = (props) => (
        <Panel>
            <Panel.Heading>{props.title}
            </Panel.Heading>
            <Panel.Body>
                {props.description}
            </Panel.Body>
            <Panel.Footer>
                <Link to={`/Projet/${props.id}`}>
                    <Button card>Voir</Button>
                </Link>
            </Panel.Footer>
        </Panel>
);

export default Card;
