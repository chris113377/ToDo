import React, { Component } from 'react';

import Header from './header';
import ToDoItem from './todoItem';
import '../index.css'

class List extends Component {
  state = { 
    todos: [
      {id: 1, task: "study", completed: false},
      {id: 2, task: "have fun", completed: false},
      {id: 3, task: "watch a movie", completed: false}
    ]
  }

  render() { 
    return ( 
      <div>
        <Header />
        <section>
          <h3>Need to finish:</h3>
          {this.state.todos.map(todo => (
            <ToDoItem key={todo.id} task={todo.task} />
          ))}
        </section>

        <section>
          <h3>All done:</h3>
        </section>
      </div>
     );
  }
}
 
export default List;