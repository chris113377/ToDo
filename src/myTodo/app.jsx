import React, { Component } from 'react';

import List from './list';
import '../index.css'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <h1 className="app-name">My To-Do List</h1>
        <List />
      </React.Fragment>
     );
  }
}
 
export default App;