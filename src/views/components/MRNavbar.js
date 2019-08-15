import React, { Component } from "react";
import "../css/navbar.css";



export class MRNavbar extends Component {
    render() {
    return (
      <nav className="nav navbar-color">
          <div className="cart-holder">
              <button className="cart-button" onClick={this.props.handleCartState}> My Cart ( {this.props.quantity} ) </button>
          </div>
      </nav>
    );
  }
}
