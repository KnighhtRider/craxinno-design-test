import React from "react";
import styles from "../Card/Card.module.css";
import fbIcon from "../../../../assets/Icon.png";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.pattern}>
        <div className={styles.rectangle_43}></div>
        <div className={styles.rectangle_62}></div>
      </div>
      {/* Content */}
      <div className={styles.content}>
        <div className={styles.icon}>
          <img src={fbIcon} alt="" />
        </div>

        {/* Text */}
        <div className={styles.text}>
          <div className={styles.heading}>Facebook</div>
          <div className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus
            dui faucibus eu.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
