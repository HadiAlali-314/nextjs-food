import React from "react";
import styles from "./topbar.module.css";

const TopBar = () => {
  return (
    <div>
      <div>
        <div className={styles.topBar}>
          <div className={styles.contact}>
            <i className="fa-solid fa-phone">
              <span className={styles.phoneNumber}>(414) 857 - 0107</span>
            </i>
            <i className="fa-regular fa-envelope">
              <span className={styles.email}>hade@frontendDev</span>
            </i>
          </div>
          <div className={styles.socialIcons}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
