import React, { Component } from "react";
import "../css/navbar.css";



export class MRNavbar extends Component {
    handleEvent(event) {
        console.log(event);
        this.props.handleCart();
    }

    render() {
    return (
      <nav className="nav navbar-color">
          <div className="cart-holder">
              <button className="cart-button" onClick={e => this.handleEvent(e)}> My Cart ( {this.props.quantity} ) </button>
          </div>
      </nav>
    );
  }
}
