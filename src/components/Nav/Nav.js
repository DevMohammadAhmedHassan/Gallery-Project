import React from "react";
import styles from "./Nav.module.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h1>Cool Gallery</h1>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/mohammad-ahmed-hassan-b04a0a291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/DevMohammadAhmedHassan" target="_blank" rel="noopener noreferrer">
            <FiGithub size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
