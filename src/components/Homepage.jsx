import React from "react";
import { useNavigate } from "react-router-dom";
import './Homepage.css'
import logo from "../assets/logo.png"
const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/products");
  };

  return (
    <div className="home-page">
        <img
          src={logo}
          alt="E-Plant"
          width="50px"
          height="50px"
        />
        <h1>Welcome To <b>FLORA STORE</b></h1>
        <div className="divider"></div>
        <p>Balancing Beauty and Wellness</p>
      <button className="get-started-button" onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
