import React from "react";
import { useNavigate } from "react-router-dom";
import './Profile.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/form");
  };

  return (
    <div class="profile">
      <h1 >Sign up to continue</h1>
      <button onClick={handleSignUpClick}>Proceed</button>
    </div>
  );
};

export default ProfilePage;
