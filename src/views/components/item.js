import React, {Component} from 'react';

export class Item extends Component {
    render(){
        return (
            <div>
                <img src={this.props.item.image} alt={this.props.item.name}/>
                <p>{this.props.item.name}</p>
                <p>${this.props.item.price.toFixed(2)}</p>
                <p>{this.props.item.summary}</p>
                <p>{this.props.item.sizes}</p>
            </div>
        );
    }
}

