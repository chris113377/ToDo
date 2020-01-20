import React, { Component } from "react";

class ToDoItem extends Component {
  whichListLayout = () => {
    if (this.props.completed === false) {
      return (
        <li style={{ marginTop: "15px" }}>
          <span className="listSpan">{this.props.task}</span>

          <button
            className="listBtn1"
            onClick={() => this.props.deleteItem(this.props.id)}
          >
            Delete
          </button>

          <button
            className="listBtn2"
            onClick={() => this.props.finished(this.props.id)}
          >
            Completed
          </button>
        </li>
      );
    }

    return (
      <li style={{ marginTop: "15px" }}>
        <span className="listSpan">{this.props.task}</span>
      </li>
    );
  };

  render() {
    return <React.Fragment>{this.whichListLayout()}</React.Fragment>;
  }
}

export default ToDoItem;
