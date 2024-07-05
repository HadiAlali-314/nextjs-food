import React from "react";
import styles from "./contact.module.css";
const ContactUs = () => {
  return (
    <div>
      <div className={styles.first}>
        <div className={styles.textSection}>
          <h1>Contact Us</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className={styles.form}>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.date}>
                <h1>Name</h1>
                <button>
                  <span>Enter your name</span>
                </button>
              </div>
              <div className={styles.time}>
                <h1>Email</h1>
                <button>
                  <span>Enter email address </span>
                </button>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.total}>
                <h1>Subject</h1>
                <button>
                  <span>Write a subject</span>
                </button>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.total}>
                <h1>Message</h1>
                <button className={styles.message}>
                  <span>Write your message</span>
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
      <div className={styles.second}>
        <div className={styles.text}>
          <div className={styles.infoDiv1}>
            <h1>Call Us:</h1>
            <h2>+1-234-567-8900</h2>
          </div>
          <div className={styles.infoDiv2}>
            <h1>Hours:</h1>
            <p>Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm</p>
          </div>
          <div className={styles.infoDiv3}>
            <h1>Our Location:</h1>
            <p>123 Bridge Street Nowhere Land, LA 12345 United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
