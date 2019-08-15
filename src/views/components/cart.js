import React, {Component} from 'react';

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.subtotal = this.props.cart.price  * this.props.cart.quantity;
    }

    render(){
        return (
            <div>
                <img src={this.props.cart.image} alt={this.props.cart.name}/>
                <div>{this.props.cart.name}</div>
                <div>${this.props.cart.price.toFixed(2)}</div>
                <div>{this.props.cart.quantity}x {this.props.cart.price.toFixed(2)}</div>
                <div>${this.subtotal.toFixed(2)}</div>
                <div>Size: {this.props.cart.size}</div>
            </div>
        );
    }
}

