import React, { Component } from 'react';

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <input className="input-bar" type="text" name="" id="" placeholder="Plese type your task"/>
        <button className="input-button" type="submit">Add</button>
      </div>
     );
  }
}
 
export default Header;