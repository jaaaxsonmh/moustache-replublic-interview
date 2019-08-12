import React, {Component} from "react";

import {MRNavbar} from "./components/MRNavbar.js";

import {Item} from "./components/item.js";
import {Cart} from "./components/cart.js";
import "./css/home.css";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [
                {
                    "id": 1,
                    "name": "Classic tee",
                    "price": 75,
                    "size": "S",
                    "quantity": 4,
                    "image": "https://www.partsware.com.au/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/t/mtk002a.jpg",
                    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "id": 2,
                    "name": "Classic tee",
                    "price": 75,
                    "size": "M",
                    "quantity": 3,
                    "image": "https://www.partsware.com.au/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/t/mtk002a.jpg",
                    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ],
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
        };
}

render()
{
    //TODO: take cart into own dumb component, to build UI
    const cart = this.state.cart.map((cart, key) =>
        <Cart cart={cart} key={cart.id}/>
    );

    const product = this.state.product.map((item, key) =>
        <Item item={item} key={item.id}/>);

    // Sum quantity based on length of cart
    let quantity = 0;
    this.state.cart.map((cart, key) =>
        console.log(quantity += cart.quantity)
    );

    return (
        <div>
            <div>
                <MRNavbar quantity={quantity}/>
            </div>
            <ul>{cart}</ul>
            <div>
                {product}
            </div>
        </div>
    );
}
}
