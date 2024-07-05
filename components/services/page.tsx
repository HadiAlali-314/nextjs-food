import React from "react";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div>
      <div className={styles.services}>
        <h1 className={styles.title}>We also offer unique services for you</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img src="/one.png" alt="" />
            <h1>Caterings</h1>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/fohr.png" alt="" />
            <h1>Birthdays</h1>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/one.png" alt="" />
            <h1>Weddings </h1>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/fohr.png" alt="" />
            <h1>Events</h1>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
