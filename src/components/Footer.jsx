import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          © 2024 Copyright:
          <a href="https://github.com/SriramChowdaryMogalapu">
            Sriram Chowdary Mogalapu
          </a>
        </p>
      </div>
      <div className="social-media">
        <p>Follow Me on : </p>
        <ul>
          <li className="social-icon">
            <a href="https://github.com/SriramChowdaryMogalapu">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li className="social-icon">
            <a href="https://api.whatsapp.com/send?phone=919381436552&text=Hi!%20%20This%20is%20Sriram%20here!!%20Feel%20Free%20to%20message%20me%20for%20any%20doubts!!">
              <i class="fab fa-whatsapp"></i>
            </a>
          </li>
          <li className="social-icon">
            <a href="https://www.linkedin.com/in/sriram-chowdary-mogalapu-899500185">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
