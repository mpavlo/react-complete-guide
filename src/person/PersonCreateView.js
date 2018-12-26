import React from "react";

const PersonEditView = (props) => {
  return (
    <div>
      <div style={{float:"left", paddingRight: "5px"}}>Vorname: <input type="text" name="firstName" value={props.person.firstName}
                           onChange={(event) => props.onChangeField(event, "firstName")} /></div>
      <div style={{float:"left", paddingRight: "5px"}}>Name: <input type="text" name="name" value={props.person.lastName}
                        onChange={(event) => props.onChangeField(event, "lastName")}/></div>
      <div style={{float:"left", paddingRight: "5px"}}>Alter: <input type="text" name="age" value={props.person.age}
                         onChange={(event) => props.onChangeField(event, "age")} /></div>

      <input type="button" onClick={props.onCreate} value="speichern" />
    </div>
  )
};

export default PersonEditView;