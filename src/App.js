import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile";
import HomePage from "./pages/home";
import MultiStepForm from "./components/multiStepForm/Multistepform";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default App;
