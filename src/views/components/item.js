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
                                onClick={() => this.selectedSmall()}>{this.props.item.sizes[0]}</button>
                        <button className="size-button"
                                onClick={() => this.selectedMed()}>{this.props.item.sizes[1]}</button>
                        <button className="size-button"
                                onClick={() => this.selectedLarge()}>{this.props.item.sizes[2]}</button>
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

    selectedSmall() {
        this.setState({
            size: this.props.item.sizes[0],
            error: null
        })
    }

    selectedMed() {
        this.setState({
            size: this.props.item.sizes[1],
            error: null
        })
    }

    selectedLarge() {
        this.setState({
            size: this.props.item.sizes[2],
            error: null
        })
    }

    addToCart() {
        if (this.state.size === null) {
            this.setState({
                error: "Please select size".toUpperCase()
            })
        }
        // if(this.props.item.size === this.state.size){
        //
        // }
        // console.log(this.props.item.push(this.props.item.quantity + 1))
        // // const currentItem = {
        // //     id: this.props.item.id,
        // //     name: this.props.item.name,
        // //     price: this.props.item.price,
        // //     size: "S",
        // //     quantity: 4,
        // //     image: this.props.item.photoURL,
        // //     summary: this.props.item.summary
        // // };
    }
}

