import React, {Component} from 'react';
import "../css/product.css";

export class Item extends Component {
    render() {
        return (
            <div className="product-holder">
                    <img className="product-image" src={this.props.item.image} alt={this.props.item.name}/>
                <div className="product-details">
                    <div>{this.props.item.name}</div>
                    <div>${this.props.item.price.toFixed(2)}</div>
                    <div>{this.props.item.summary}</div>
                    <div>{this.props.item.sizes}</div>
                </div>
            </div>
        );
    }
}

