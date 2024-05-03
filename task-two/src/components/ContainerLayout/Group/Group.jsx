import React from "react";
import styles from "../Group/Group.module.css";
import Card from "./Card/Card";

function Group() {
  return (
    <div className={styles.group}>
      {/* Content */}
      <div className={styles.content}>
        {/* Facebook Twitter Integration */}
        <div className={styles.fb_tw_group}>
          <div className={styles.fb}>
            <Card />
          </div>
          <div className={styles.tw}>
            <Card />
          </div>
        </div>

        {/* Google Card */}
        <div className={styles.google_card}>
          <Card />
        </div>
      </div>

      <div className={styles.title}>
        <div className={styles.frame}>
          <div className={styles.frame_01}>
            <div className={styles.heading}>Integrated with Social Media</div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut
              id nisl tellus rhoncus, imperdiet consequat ornare.{" "}
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.buttonText}>Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
