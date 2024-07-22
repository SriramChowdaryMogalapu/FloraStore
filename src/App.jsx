import React from "react";
import AboutUs from "./components/AboutUs";
import "./App.css";
import Home from "./components/Homepage";

function App() {
  return (
    <div className="app-container">
          <div className="landing-content">
            <Home />
          </div>
          <div className="aboutus-container">
            <AboutUs />
          </div>
    </div>
  );
}

export default App;
