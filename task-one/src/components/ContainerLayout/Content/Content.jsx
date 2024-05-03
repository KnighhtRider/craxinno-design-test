import React from "react";
import styles from "../Content/Content.module.css";
import Illustration from "./Illustration/Illustration";

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        {/* Text Area */}
        <div className={styles.text}>
          <div className={styles.headingAdv}>
            Advanced analytics to grow your business
          </div>

          <div className={styles.headingLorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
            nisl tellus rhoncus, imperdiet
          </div>
        </div>

        <Illustration />
      </div>
    </div>
  );
}

export default Content;
