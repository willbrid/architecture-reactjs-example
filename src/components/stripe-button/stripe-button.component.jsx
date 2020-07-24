import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { stripePublicKey } from '../../constants';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = stripePublicKey;

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='E-Shopping'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
}

export default StripeCheckoutButton;