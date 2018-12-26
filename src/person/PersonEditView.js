import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PersonEditView = (props) => {
  return (
    <div>
      Vorname: <input type="text" name="firstName" value={props.person.firstName}
                      onChange={(event) => props.onChangeField(event, "firstName")} />
      Name: <input type="text" name="name" value={props.person.lastName}
                   onChange={(event) => props.onChangeField(event, "lastName")}/>
      Alter: <input type="text" name="age" value={props.person.age}
                    onChange={(event) => props.onChangeField(event, "age")} />

      <a href onClick={props.onEdit}><FontAwesomeIcon icon="edit" /></a>
    </div>
  )
};

export default PersonEditView;