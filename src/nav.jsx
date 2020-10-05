import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <span className="navbar-title">Habit Tracker</span>
        <span className="navbar-sum">{this.props.sum}</span>
      </nav>
    );
  }
}

export default Navbar;
