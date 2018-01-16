import React, { Component } from 'react';
import mirror, { actions } from "mirrorx";
mirror.hook((action, getState) => {
  console.log(action);
  console.log(getState())
})
class Header extends Component {
  handlerHome = () => {
    actions.routing.push("/");
  }
  handlerAbout = () => {
    actions.routing.push("/about");
  }
  handlerCounter = () => {
    actions.routing.push("/counter");
  }
  handlerAdd = () => {
    actions.app.increment();
  }
  
  render() {
    return (
      <div className="container-fluid">
        <ul className="nav nav-pills">
          <li role="presentation">
            <button onClick={this.handlerHome} className="btn btn-success">Home</button>
          </li>
          <li role="presentation">
            <button onClick={this.handlerAbout} className="btn btn-success">About</button>
          </li>
          <li role="presentation">
            <button onClick={this.handlerCounter} className="btn btn-success">Counter</button>
          </li>
          <li role="presentation">
            <button onClick={this.handlerAdd} className="btn btn-danger">Add</button>
          </li>
          
        </ul>
      </div>
    );
  }
}

export default Header;
