import React from "react";

const PaymentDetails = ({ prevStep, handleChange, values, handleSubmit }) => (
  <div>
    <h2>Payment Details</h2>
    <input
      type="text"
      placeholder="Payment Method"
      onChange={handleChange("paymentMethod")}
      defaultValue={values.paymentMethod}
    />
    <input
      type="text"
      placeholder="Card Number"
      onChange={handleChange("cardNumber")}
      defaultValue={values.cardNumber}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={handleSubmit}>Submit</button>
  </div>
);

export default PaymentDetails;
