import React from "react";
import styles from "./video.module.css";

const VideoPage = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src="/BG.png" alt="" />
          <div className={styles.TextImg}>
            <img src="/play.png" alt="" />
          </div>
          <h1>Feel the authentic & original taste from us</h1>
        </div>
        <div className={styles.features}>
          <div className={styles.card}>
            <img src="/menu.png" alt="" />
            <div className={styles.texts}>
              <h3>Multi Cuisine</h3>
              <p>
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/tairh.png" alt="" />
            <div className={styles.texts}>
              <h3>Easy To Order</h3>
              <p>
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/timer.png" alt="" />
            <div className={styles.texts}>
              <h3>Fast Delivery</h3>
              <p>
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
