import React from 'react';

const PersonShowView = props => {
  return (
    <div>
      {props.person.firstName} {props.person.lastName} {props.person.age}
      <input type="button" onClick={props.onToEdit} value="edit" />
    </div>
  );
};

export default PersonShowView;