import React, { Component } from "react";
import "../css/navbar.css";



export class MRNavbar extends Component {
    render() {
    return (
      <nav className="navbar navbar-expand-lg">
          <div className="navbar-text">
            My Cart ( {this.props.quantity} )
          </div>
      </nav>
    );
  }
}
