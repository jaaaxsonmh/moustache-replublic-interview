import React, {Component} from 'react';

export class Item extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.item.image} alt={this.props.item.name}/>
                    </div>
                    <div className="col-md-4">
                        <div>{this.props.item.name}</div>
                        <div className="border-top border-bottom">${this.props.item.price.toFixed(2)}</div>
                        <div>{this.props.item.summary}</div>
                        <div>{this.props.item.sizes}</div>
                    </div>
                </div>
            </div>
        );
    }
}

