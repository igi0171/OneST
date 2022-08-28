import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uen"
              className={(navData) => (navData.isActive ? styles.active : "")}
            >
              UEN
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
