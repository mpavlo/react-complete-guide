import React, { Component } from 'react';
import Person from './Person';
import Tree from './Tree';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Tree>
          <Person firstName = 'p1F' lastName = 'p1L'>
            <Person firstName = 'C1F' lastName = 'C1L'>
              <Person firstName = 'G1F' lastName = 'G1L'/>
              <Person firstName = 'G2F' lastName = 'G2L'/>
            </Person>
            <Person firstName = 'C2F' lastName = 'C2L'>
              <Person firstName = 'G3F' lastName = 'G3L'/>
              Blub
            </Person>
          </Person>
        </Tree>
      </div>
    );
  }
}

export default App;
