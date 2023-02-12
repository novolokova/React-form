import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.container}>
      <Link className={styles.logo} to="/">
        <img src="/logoForm.png" alt="logo squadhelp" />
      </Link>
      {pathname === "/" || pathname === "/signup" ? (
        <Link className={styles.btn} to="/login">
          Login
        </Link>
      ) : (
        <Link className={styles.btn} to="/signup">
          Signup
        </Link>
      )}
    </header>
  );
};

export default Header;
