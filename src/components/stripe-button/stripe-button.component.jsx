import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_live_51ImwruIqrL7UYA87fnNFIa7Ejzrp2qiQCiMUDX8bNsIjaWiXnCmyGFrL8HNVYc0T3grHUoXwnHOUyY4DKQsY282s00rED0Etvt";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succcessfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Obi Otter ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      toke={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
