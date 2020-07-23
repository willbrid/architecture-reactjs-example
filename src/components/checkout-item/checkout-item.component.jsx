import React from 'react';
import { connect } from 'react-redux';

import { addCartItem, removeCartItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addCartItem, removeCartItem, clearItemFromCart }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt='item'  />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeCartItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addCartItem: item => dispatch(addCartItem(item)),
    removeCartItem: item => dispatch(removeCartItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);