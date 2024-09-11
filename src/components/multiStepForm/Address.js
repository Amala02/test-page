import React from "react";

const AddressDetails = ({ nextStep, prevStep, handleChange, values }) => (
  <div>
    <h2>Address Details</h2>
    <input type="text" placeholder="Address" onChange={handleChange("address")} defaultValue={values.address} />
    <input type="text" placeholder="City" onChange={handleChange("city")} defaultValue={values.city} />
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

export default AddressDetails;
