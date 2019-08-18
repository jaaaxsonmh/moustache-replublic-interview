import React, {Component} from 'react';
import '../css/cart.css';

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.subtotal = this.props.cart.price * this.props.cart.quantity;
    }

    render() {
        return (
            <div className="cart-product">
                <img className="cart-image" src={this.props.cart.image} alt={this.props.cart.name}/>
                <div className="summary-holder">
                    <p className="cart-name">{this.props.cart.name}</p>
                    <p className="cart-quantity">{this.props.cart.quantity}x
                        <span className="cart-price">{"$" + this.props.cart.price.toFixed(2)}</span>
                    </p>
                    <p className="cart-size">Size: {this.props.cart.size}</p>
                    {/*<div>${this.subtotal.toFixed(2)}</div>*/}
                </div>
            </div>
        );
    }
}

