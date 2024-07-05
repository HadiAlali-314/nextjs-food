import React from "react";
import styles from "./little.module.css";
const LittleInfo = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.titles}>
              <h1>A little information for our valuable guest</h1>
              <p>
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>
            <div className={styles.cards}>
              <div className={styles.poster}>
                <h1>3</h1>
                <h5>Locations</h5>
              </div>
              <div className={styles.poster}>
                <h1>1995</h1>
                <h5>Founded</h5>
              </div>
              <div className={styles.poster}>
                <h1>65+</h1>
                <h5>Staff Members</h5>
              </div>
              <div className={styles.poster}>
                <h1>100%</h1>
                <h5>Satisfied Customers</h5>
              </div>
            </div>
          </div>
          <div className={styles.imgSection}>
            <img src="/aboutfood.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleInfo;
