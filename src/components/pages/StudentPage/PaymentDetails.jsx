/* eslint-disable comma-dangle */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SharedTitle from '../../layouts/shared/SharedTitle';
import CheckoutForm from './CheckOutFrom';

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto'
        }
    ]
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);

const PaymentDetails = () => {
    return (
        <div>
            <SharedTitle title1="Payment" title2="Details" />
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default PaymentDetails;
