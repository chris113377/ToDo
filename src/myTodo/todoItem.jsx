import React, { Component } from 'react';

class ToDoItem extends Component {
  state = { 
    task: this.props.task
  }

  isCompleted() {

  }

  render() { 
    return ( 
      <div>
        <span>{this.state.task}</span>
        <button type="submit">Delete</button>
      </div>
     );
  }
}
 
export default ToDoItem;