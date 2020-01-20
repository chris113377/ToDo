import React, { Component } from "react";

import Header from "./header";
import ToDoItem from "./todoItem";

class List extends Component {
  state = {
    idCounter: 1,
    todos: []
  };

  isCompleted = taskID => {
    let completedTask = this.state.todos.map(todo => {
      if (todo.id === taskID) {
        todo.completed = true;
      }

      return todo;
    });

    this.setState({ todos: completedTask });
  };

  deleteListItem = taskID => {
    const updatedTodos = this.state.todos.filter(todo => todo.id !== taskID);
    this.setState({ todos: updatedTodos });
  };

  generateToDo = inputData => {
    this.setState({ idCounter: this.state.idCounter + 1 });
    let newToDo = {
      id: this.state.idCounter,
      task: inputData,
      completed: false
    };
    this.state.todos.unshift(newToDo);
    console.log(newToDo);
    let addData = this.state.todos;

    this.setState({ todos: addData });
  };

  displayUnfinishedList = () => {
    return (
      <React.Fragment>
        {this.state.todos.map(todo => {
          if (todo.completed === false) {
            return (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                finished={this.isCompleted}
                deleteItem={this.deleteListItem}
              />
            );
          }
        })}
      </React.Fragment>
    );
  };

  displayFinishedList = () => {
    return (
      <React.Fragment>
        {this.state.todos.map(todo => {
          if (todo.completed === true) {
            return (
              <ToDoItem
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
              />
            );
          }
        })}
      </React.Fragment>
    );
  };

  render() {
    return (
      <main>
        <Header dataFromInput={this.generateToDo} />

        <div className="no-task">
          {this.state.todos.length === 0 && <h1>No ToDo's at the time!</h1>}
        </div>

        <section className="list1">
          <h2 style={{ textDecoration: "underline" }}>Need to finish:</h2>
          {this.displayUnfinishedList()}
        </section>

        <section className="list2">
          <h2 style={{ textDecoration: "underline" }}>All done:</h2>
          {this.displayFinishedList()}
        </section>
      </main>
    );
  }
}

export default List;
