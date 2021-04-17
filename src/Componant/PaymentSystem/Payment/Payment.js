import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';


import PaymentFrom from '../PaymentForm/PaymentForm';
import SplitForm from '../SplitForm/SplipForm';
const stripePromise = loadStripe('pk_test_51IeJ4GK549yChvRF5hsv5WZnMgg8TR0nfmCzg7pSkPxAiZwcoTXJttvL88ZRt0J94XF235j5ILZOgsTIbFDWlEE400d0QKh57t');
const Payment = ({ henselSuccessPayment }) => {
    return (

        <Elements stripe={stripePromise}>
            <PaymentFrom henselSuccessPayment={henselSuccessPayment}></PaymentFrom>

        </Elements>

    );
};

export default Payment;