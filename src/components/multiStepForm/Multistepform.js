import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./Address";
import PaymentDetails from "./Payment";
import './pages.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    paymentMethod: "",
    cardNumber: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/", { state: { name: formData.name } });
    }, 1000);
  };

  if (isSubmitted) {
    return <div>Signup complete! Redirecting...</div>;
  }

  switch (step) {
    case 1:
      return (
        <PersonalDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <AddressDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <PaymentDetails
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return null;
  }
};

export default MultiStepForm;
