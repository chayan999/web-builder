import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentFrom = ({ henselSuccessPayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [successPayment, setsuccessPayment] = useState(null)
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            //console.log('[error]', error);
            setsuccessPayment(null)
        } else {
            //console.log('[PaymentMethod]', paymentMethod);
            setsuccessPayment(paymentMethod.id);
            setPaymentError(null);
            henselSuccessPayment(paymentMethod.id);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <h4 style={{ color: 'red' }}>{paymentError}</h4>
            }
            {
                successPayment && <h4 style={{ color: 'green' }}>{'Your payment sucessfull'}</h4>
            }
        </div >
    );
};
export default PaymentFrom;