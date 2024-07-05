import React from "react";
import styles from "./order.module.css";

const OrderSection = () => {
  return (
    <div>
      <div className={styles.orderSection}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1>You can order through apps</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
          <div className={styles.appsSection}>
            <div className={styles.cards}>
              <img src="/order1.png" alt="" />
              <img src="/order2.png" alt="" />
              <img src="/order3.png" alt="" />
              <img src="/order3.png" alt="" />
              <img src="/order3.png" alt="" />
              <img src="/order1.png" alt="" />
              <img src="/order1.png" alt="" />
              <img src="/order2.png" alt="" />
              <img src="/order3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
