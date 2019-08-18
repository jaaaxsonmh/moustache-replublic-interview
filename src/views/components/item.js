import React, {Component} from 'react';
import "../css/product.css";

export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: null,
            error: null
        }
    }

    render() {
        return (
            <div className="product-holder">
                <img className="product-image" src={this.props.item.image} alt={this.props.item.name}/>
                <div className="product-details">
                    <h4 className="product-name">{this.props.item.name}</h4>
                    <p className="product-price border-top border-bottom">${this.props.item.price.toFixed(2)}</p>
                    <p className="product-summary">{this.props.item.summary}</p>
                    <div className="size-section">
                        <p>{"size".toUpperCase()}
                            <sup className="required-star">{"*"}</sup>
                            <span className="selected-size">{this.state.size}</span>
                        </p>

                        <button className="size-button"
                                onClick={() => this.selectedSize(0)}>{this.props.item.sizes[0]}</button>
                        <button className="size-button"
                                onClick={() => this.selectedSize(1)}>{this.props.item.sizes[1]}</button>
                        <button className="size-button"
                                onClick={() => this.selectedSize(2)}>{this.props.item.sizes[2]}</button>
                    </div>
                    <div className="error-holder">
                        <p className="error-text">{this.state.error}</p>
                    </div>
                    <button className="add-to-cart-button"
                            onClick={() => this.addToCart()}>{"add to cart".toUpperCase()}</button>
                </div>
            </div>
        );
    }

    selectedSize(i) {
        this.setState({
            size: this.props.item.sizes[i],
            error: null
        })
    }

    addToCart() {
        if (this.state.size === null) {
            this.setState({
                error: "Please select size".toUpperCase()
            })
        }
    }
}

