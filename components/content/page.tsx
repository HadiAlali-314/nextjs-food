import React from "react";
import styles from "./content.module.css";
const Content = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.containerdiv}>
          <div className={styles.imgContainer}>
            <img className={styles.Img1} src="/first.png" alt="" />

            <img className={styles.Img2} src="/second.png" alt="" />
            <img className={styles.Img3} src="/third.png" alt="" />
          </div>
          <div className={styles.newtext}>
            <div className={styles.textContainer}>
              <h1>Fastest Food Delivery in City</h1>
              <p>
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>

              <h2>
                <span className={styles.svgIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#AD343E"
                  >
                    <path
                      d="M7.53504 5.02349V7.53516L9.41879 9.41891M13.1863 7.53516C13.1863 10.6563 10.6561 13.1864 7.53504 13.1864C4.41394 13.1864 1.88379 10.6563 1.88379 7.53516C1.88379 4.41406 4.41394 1.88391 7.53504 1.88391C10.6561 1.88391 13.1863 4.41406 13.1863 7.53516Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Delivery within 30 minutes
              </h2>
              <h2>
                <span className={styles.svgIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#AD343E"
                  >
                    <path
                      d="M5.65131 8.79099L9.41881 5.02349M5.96529 5.33745H5.97157M9.10487 8.47704H9.11115M11.9305 13.1864V3.13974C11.9305 2.44617 11.3682 1.88391 10.6746 1.88391H4.39548C3.7019 1.88391 3.13965 2.44617 3.13965 3.13974V13.1864L5.33736 11.9306L7.53506 13.1864L9.73277 11.9306L11.9305 13.1864ZM6.27923 5.33745C6.27923 5.51085 6.13867 5.65141 5.96527 5.65141C5.79188 5.65141 5.65131 5.51085 5.65131 5.33745C5.65131 5.16406 5.79188 5.02349 5.96527 5.02349C6.13867 5.02349 6.27923 5.16406 6.27923 5.33745ZM9.41881 8.47704C9.41881 8.65043 9.27825 8.79099 9.10486 8.79099C8.93146 8.79099 8.7909 8.65043 8.7909 8.47704C8.7909 8.30364 8.93146 8.16308 9.10486 8.16308C9.27825 8.16308 9.41881 8.30364 9.41881 8.47704Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Best Offer & Prices
              </h2>
              <h2>
                <span className={styles.svgIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#AD343E"
                  >
                    <path
                      d="M1.88379 1.88385H3.13962L3.39079 3.13968M4.39546 8.16302H10.6746L13.1863 3.13968H3.39079M4.39546 8.16302L3.39079 3.13968M4.39546 8.16302L2.95571 9.60276C2.56014 9.99833 2.8403 10.6747 3.39971 10.6747H10.6746M10.6746 10.6747C9.98104 10.6747 9.41879 11.2369 9.41879 11.9305C9.41879 12.6241 9.98104 13.1863 10.6746 13.1863C11.3682 13.1863 11.9305 12.6241 11.9305 11.9305C11.9305 11.2369 11.3682 10.6747 10.6746 10.6747ZM5.65129 11.9305C5.65129 12.6241 5.08903 13.1863 4.39546 13.1863C3.70188 13.1863 3.13962 12.6241 3.13962 11.9305C3.13962 11.2369 3.70188 10.6747 4.39546 10.6747C5.08903 10.6747 5.65129 11.2369 5.65129 11.9305Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Online Services Available
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
