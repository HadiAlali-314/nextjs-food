import React from "react";
import styles from "./book.module.css";
const BookAtable = () => {
  return (
    <div className={styles.back}>
      <div className={styles.textAndForm}>
        <div className={styles.textSection}>
          <h1>Book A Table</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className={styles.form}>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.date}>
                <h1>Date</h1>
                <button>
                  <span>
                    04/01/2023
                    <svg
                      className={styles.svgg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.33333 4.66667V2M10.6667 4.66667V2M4.66667 7.33333L11.3333 7.33333M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V4.66667C14 3.93029 13.403 3.33333 12.6667 3.33333L3.33333 3.33333C2.59695 3.33333 2 3.93029 2 4.66667L2 12.6667C2 13.403 2.59695 14 3.33333 14Z"
                        stroke="#737865"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className={styles.time}>
                <h1>Time</h1>
                <button>
                  <span>
                    06:30 PM{" "}
                    <svg
                      className={styles.svgg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.6667 6L8.00001 10.6667L3.33334 6"
                        stroke="#2C2F24"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.date}>
                <h1>Name</h1>
                <button>
                  <span>Enter your name</span>
                </button>
              </div>
              <div className={styles.time}>
                <h1>Phone</h1>
                <button>
                  <span>x-xxx-xxx-xxxx</span>
                </button>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.total}>
                <h1>Total Person</h1>
                <button>
                  <span>
                    1 Person{" "}
                    <svg
                      className={styles.svgg2}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.6667 6L8.00001 10.6667L3.33334 6"
                        stroke="#2C2F24"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.bookBut}>
                <button>
                  <span>Book A Table</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <img src="/map.png" alt="" />
      </div>
    </div>
  );
};

export default BookAtable;
