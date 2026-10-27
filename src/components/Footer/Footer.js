import React from 'react'
import { FaReact } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Made with{" "}
        <span className="react-icon">
          <FaReact color="#2c7688ff" size={20} />
        </span>{" "}
        by
      </p>
      <p>DevMohammadAhmedHassan</p>
    </div>
  );
}

export default Footer