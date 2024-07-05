import React from "react";
import styles from "./blog.module.css";
const Hero = () => {
  return (
    <div>
      <div className={styles.blog}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.text}>
              <div>
                <h1>Our Menu</h1>
                <p>
                  We consider all the drivers of change gives you the components
                  you need to change to create a truly happens.
                </p>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.firstBut}>
                <span>All</span>
              </button>
              <button className={styles.restOfButtons}>
                <span>Breakfast</span>
              </button>
              <button className={styles.restOfButtons}>
                <span>Main Dishes</span>
              </button>
              <button className={styles.restOfButtons}>
                <span>Drinks</span>
              </button>
              <button className={styles.restOfButtons}>
                <span>Desserts</span>
              </button>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.poster}>
              <img src="/Menu1.png" alt="" />
              <div className={styles.posterTexts}>
                <h1>$ 9.99</h1>
                <h3>Fried Eggs</h3>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
            <div className={styles.poster}>
              <img src="/Menu2.png" alt="" />
              <div className={styles.posterTexts}>
                <h1>$ 15.99</h1>
                <h3>Hawaiian Pizza</h3>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
            <div className={styles.poster}>
              <img src="/Menu3.png" alt="" />
              <div className={styles.posterTexts}>
                <h1>$ 7.25</h1>
                <h3>Martinez Cocktail</h3>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
            <div className={styles.poster}>
              <img src="/Menu4.png" alt="" />
              <div className={styles.posterTexts}>
                <h1>$ 20.99 </h1>
                <h3>Butterscotch Cake</h3>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
            <div className={styles.poster}>
              <img src="/Menu5.png" alt="" />
              <div className={styles.posterTexts}>
                <h1>$ 5.89</h1>
                <h3>Mint Lemonade</h3>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
            <div className={styles.poster}>
              <img src="/Menu6.png" alt="" />
              <div className={styles.posterTexts}>
                <h1>$ 18.05</h1>
                <h3>Chocolate Icecream</h3>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
            <div className={styles.poster}>
              <img src="/Menu7.png" alt="" />
              <div className={styles.posterTexts}>
                <h1>$ 12.55</h1>
                <h3>Cheese Burger</h3>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
            <div className={styles.poster}>
              <img src="/Menu8.png" alt="" />
              <div className={styles.posterTexts}>
                <h1>$ 12.99</h1>
                <h3>Classic Waffles</h3>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
