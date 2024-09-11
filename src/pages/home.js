import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "../components/multiStepForm/Productlist";
import './Profile.css';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name ; // Check if name is being retrieved correctly

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    
    <div class="home">
      <h1>Welcome Back {name}!</h1> 
      <button onClick={handleProfileClick}>Profile</button>
      <ProductList />

    </div>
    
    
  );
};

export default HomePage;
