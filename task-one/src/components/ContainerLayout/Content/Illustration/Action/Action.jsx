import React from "react";
import styles from "../Action/Action.module.css";

function Action() {
  return (
    <div className={styles.action}>
      <p className={styles.privacyText}>
        By Clicking “Register” you agree{" "}
        <span>
          <a href="">Privacy Policy</a>
        </span>
      </p>

      <button className={styles.button}>Register</button>
      <div className={styles.alreadyText}><p>Already have an account? <a href="">Sign In</a></p></div>
    </div>
  );
}

export default Action;
