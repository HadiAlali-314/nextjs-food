import React from "react";
import styles from "./test.module.css";

const Testimonial = () => {
  return (
    <div>
      <div className={styles.testimony}>
        <div className={styles.container}>
          <h1>What Our Customers Say</h1>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h1 className={styles.firstH1}>“The best restaurant”</h1>
              <p>
                Last night, we dined at place and were simply blown away. From
                the moment we stepped in, we were enveloped in an inviting
                atmosphere and greeted with warm smiles.
              </p>
              <div className={styles.line}></div>
              <div className={styles.imgs}>
                <img src="/person1.png" alt="" />
                <div>
                  <h3>Sophire Robson</h3>
                  <h5>Los Angeles, CA</h5>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <h1 className={styles.secondH1}>“Simply delicious”</h1>
              <p>
                Place exceeded my expectations on all fronts. The ambiance was
                cozy and relaxed, making it a perfect venue for our anniversary
                dinner. Each dish was prepared and beautifully presented.
              </p>
              <div className={styles.line}></div>
              <div className={styles.imgs}>
                <img src="/person2.png" alt="" />
                <div>
                  <h3>Matt Cannon</h3>
                  <h5>San Diego, CA</h5>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <h1 className={styles.lastH1}>“One of a kind restaurant”</h1>
              <p>
                The culinary experience at place is first to none. The
                atmosphere is vibrant, the food - nothing short of
                extraordinary. The food was the highlight of our evening. Highly
                recommended.
              </p>
              <div className={styles.line}></div>
              <div className={styles.imgs}>
                <img src="/person3.png" alt="" />
                <div>
                  <h3>Andy Smith</h3>
                  <h5>San Francisco, CA</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
