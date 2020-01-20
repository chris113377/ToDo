import React, { Component } from 'react';

class Header extends Component {
  state = { 
    task: ''
  }

  render() { 
    return ( 
      <form className="app-header" id="myForm">
        <input 
          className="input-bar" 
          type="text"
          placeholder="Please type your task"
          onChange={(event) => this.setState({task: event.target.value})}
          />
        <button 
          onClick={(event) => {
            this.props.dataFromInput(this.state.task);
            event.preventDefault();
            document.getElementById("myForm").reset(); 
          }}
          className="input-button" 
          type="submit"
          >Add</button>
      </form>
     );
  }
}
 
export default Header;