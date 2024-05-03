import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Logo from "./Logo/Logo";
import Button from "./Button/Button";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Button />
    </div>
  );
}

export default Navbar;
