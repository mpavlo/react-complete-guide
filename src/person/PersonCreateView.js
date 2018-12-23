import React from "react";

const PersonEditView = (props) => {
  return (
    <div>
      Vorname: <input type="text" name="firstName" value={props.person.firstName}
                      onChange={(event) => props.onChangeField(event, "firstName")} />
      Name: <input type="text" name="name" value={props.person.lastName}
                   onChange={(event) => props.onChangeField(event, "lastName")}/>
      Alter: <input type="text" name="age" value={props.person.age}
                    onChange={(event) => props.onChangeField(event, "age")} />

      <input type="button" onClick={props.onCreate} value="speichern" />
    </div>
  )
};

export default PersonEditView;