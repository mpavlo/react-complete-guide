import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PersonShowView = props => {
  return (
    <div>
      {props.person.firstName} {props.person.lastName} {props.person.age}
      <a href onClick={props.onToEdit}><FontAwesomeIcon icon="edit" /></a>

    </div>
  );
};

export default PersonShowView;