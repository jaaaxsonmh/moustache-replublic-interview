import React, {Component} from 'react';
import "../css/product.css";

export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: ""
        }
    }

    render() {
        return (
            <div className="product-holder">
                    <img className="product-image" src={this.props.item.image} alt={this.props.item.name}/>
                <div className="product-details">
                    <h1 className="product-name">{this.props.item.name}</h1>
                    <p className="product-price border-top border-bottom">${this.props.item.price.toFixed(2)}</p>
                    <p className="product-summary">{this.props.item.summary}</p>
                    <p className="size-section">SIZE<sup className="required-star">*</sup><span className="selected-size">{this.state.size}</span></p>
                    <button className="size-button" onClick={() =>this.selectedSmall()}>{this.props.item.sizes[0]}</button>
                    <button className="size-button" onClick={() =>this.selectedMed()}>{this.props.item.sizes[1]}</button>
                    <button className="size-button" onClick={() => this.selectedLarge()}>{this.props.item.sizes[2]}</button>
                </div>
            </div>
        );
    }

    selectedSmall() {
        this.setState({
            size: this.props.item.sizes[0]
        })

    }
    selectedMed() {
        this.setState({
            size: this.props.item.sizes[1]
        })
    }
    selectedLarge() {
        this.setState({
            size: this.props.item.sizes[2]
        })
    }

}

