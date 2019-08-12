import React, {Component} from "react";

import {MRNavbar} from "./components/MRNavbar.js";

import {Item} from "./components/item.js";
import "./css/home.css";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            product: [
                {
                    "id": 1,
                    "name": "Classic tee",
                    "price": 75,
                    "sizes": [
                        "S", "M", "L"
                    ],
                    "image": "https://www.partsware.com.au/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/t/mtk002a.jpg",
                    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
            ]
        }
    }

    render() {
        const cart = this.state.cart.map((item, key) =>
            <li key={item.id}>{item.name}</li>);

        const product = this.state.product.map((item, key) =>
            <Item item={item} key={item.id}/>);

        return (
            <div>
                <div> </div>
                <ul>{cart}</ul>
                <div>
                    {product}
                </div>
            </div>
        );
    }
}
