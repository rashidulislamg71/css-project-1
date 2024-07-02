/* eslint-disable no-unused-vars */

import { useRef, useState } from "react";
import styles from "./NavBar.module.css";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <section id="NavBar_section">
      <div className={styles.NavBar_container}>
        <div className={styles.logo_container}>
          <a href="#home_section">CSS-1</a>
        </div>

        <div className={styles.menuBar_container}>
          <nav
            ref={navRef}
            className={`${styles.menuBar} ${
              showMenu ? styles.navResponsive : ""
            }`}
          >
            <Link
              className={({ isActive }) => (isActive ? styles.acitve : "")}
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className={({ isActive }) => (isActive ? styles.acitve : "")}
              to="/about"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              className={({ isActive }) => (isActive ? styles.acitve : "")}
              to="/services"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              className={({ isActive }) => (isActive ? styles.acitve : "")}
              to="/account"
              onClick={closeMenu}
            >
              Account
            </Link>
            <Link
              className={({ isActive }) => (isActive ? styles.acitve : "")}
              to="/get-started"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </nav>
        </div>

        <button
          title="menu"
          className={styles.menuBtn}
          onClick={showMenuHandler}
        >
          {showMenu ? <FiX /> : <RxHamburgerMenu />}
        </button>
      </div>
    </section>
  );
};

export default NavBar;
