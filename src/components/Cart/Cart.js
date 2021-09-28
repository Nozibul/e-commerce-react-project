
import React from 'react';
import './cart.css'

const Cart = (props) => {
    // console.log(props.carts)
    //total on click
    const {carts} = props // props er vitore je carts ase seta k destructuring korlam

    // akhane current er jaigai product diasi ,ai product er value ta carts theke pabo 
    const total = carts.reduce((previous, product) => previous + product.price , 0)

 /*    let total = 0;
    // jehetu cart gulo array so for of use korbo
    for(const cart of carts){
        total = total + cart.price;
    } */

    //  const shipping = total / 125 ; // ato dite pari
     const shipping = total > 0 ? 15: 0 ;
     let beforeTax = shipping + total ;
     let tax = beforeTax /10;
     let grandTotal = tax + total + shipping

    return (
        <div>
            <div className="order">        
                <h2>Order Summary</h2>
                <h4>Items Order: {props.carts.length}</h4>
            </div>
            <h2>Total: {total.toFixed(2)}</h2>
            <h4>Shipping: {shipping.toFixed(2)} </h4>
            <h4>Total Before Tax : {beforeTax.toFixed(2)}</h4>
            <h3>Tax: {tax.toFixed(2)}</h3>
            <h2 className="grand-total">Grand Total: {grandTotal.toFixed(2)}</h2>
            <div className="order">
               <button className="cart-btn">Review Your order</button>
            </div>
        </div>
    );
};

export default Cart;