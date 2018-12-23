import React, { Component } from 'react';
import './App.css';
import PersonShowView from "./person/PersonShowView";
import PersonEditView from "./person/PersonEditView";
import PersonCreateView from "./person/PersonCreateView";

class App extends Component {

  state = {
    persons: [],
    views: []
  };

  onEdit = (person, index) => {
    const persons = [...this.state.persons];
    persons[index] = person;
    const views = [...this.state.views];
    views[index] = "show";
    this.setState({
      persons: persons,
      views: views
    });
  }

  onToEdit = (index) => {
    const views = [...this.state.views];
    views[index] = "edit"
    this.setState({views: views});
  }

  onToCreate = () => {
    const persons = this.state.persons.length === 0 ?
      [{lastName: "", firstName: "", age: ""}] : [
      ...this.state.persons,
      {lastName: "", firstName: "", age: ""},

    ];

    const views = this.state.views.length === 0 ? ["create"] : [
      ...this.state.views,
      "create"
    ];
    this.setState({
      persons: persons,
      views: views
    });
  }

  onChangeField = (event, index, field) => {
    const persons = [...this.state.persons];
    persons[index][field] = event.target.value;
    this.setState({persons: persons});
  }

  render() {
    const personViews = [];
    for (let i = 0; i < this.state.persons.length; i++) {
      const currentPerson = this.state.persons[i];
      if (this.state.views[i] === "show") {
        personViews[i] =
          <li key={i}>
            <PersonShowView
              person={currentPerson}
              onToEdit={() => this.onToEdit(i)}
            />
          </li>
      } else if(this.state.views[i] === "edit") {
        personViews[i] =
          <li key={i}>
            <PersonEditView
              person={currentPerson}
              onEdit={() => this.onEdit(currentPerson, i)}
              onChangeField={(event, field) => this.onChangeField(event, i, field)}
            />
          </li>
      } else if(this.state.views[i] === "create") {
        personViews[i] =
          <li key={i}>
            <PersonCreateView
              person={currentPerson}
              onCreate={() => this.onEdit(currentPerson, i)}
              onChangeField={(event, field) => this.onChangeField(event, i, field)}
            />
          </li>
      }
    }

    return (
      <div className="App">
        <input type="button" value="Neue Person erstellen" onClick={this.onToCreate}/>
        <ul>{personViews}</ul>
      </div>
    );
  }
}

export default App;
