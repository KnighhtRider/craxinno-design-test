import React from "react";
import styles from "../Illustration/Illustration.module.css";
import Form from "./Form/Form";
import Action from "./Action/Action";


function Illustration() {
  return (
    <div className={styles.illustration}>
      <div className={styles.frame}>
        <div className={styles.createAcc}>Create Your Account</div>
        {/* Form Component */}
        <Form />
        <Action />
      </div>

      <div className={styles.textureBG}>
        <div className={styles.background}>
          <div className={styles.rectangle_06}></div>
        </div>
      </div>
    </div>
  );
}

export default Illustration;
