/* eslint-disable comma-dangle */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
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
    const { state } = useLocation();

    return (
        <div>
            <SharedTitle title1="Payment " title2=" Details" />
            <Helmet>
                <title>F|Food|School - Payment</title>
            </Helmet>
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm data={state} />
            </Elements>
        </div>
    );
};

export default PaymentDetails;
