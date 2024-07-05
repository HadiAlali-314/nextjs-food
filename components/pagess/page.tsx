import React from "react";
import styles from "./pages.module.css";
import Link from "next/link";
const Blogss = () => {
  return (
    <div>
      <div className={styles.back}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1>Our Blog & Articles</h1>
            <p>
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </p>
          </div>
          <div className={styles.cards}>
            <div className={styles.poster}>
              <Link href="/blogspage">
                <img src="/page1.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>How to prepare a delicious gluten free sushi</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                <img src="/page2.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>Exclusive baking lessons from the pastry king</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page3.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>How to prepare the perfect fries in an air fryer</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page4.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>How to prepare delicious chicken tendersr</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page5.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>5 great cooking gadgets you can buy to save time</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page6.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>The secret tips & tricks to prepare a perfect burger</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page7.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>7 delicious cheesecake recipes you can prepare</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page8.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>7 delicious cheesecake recipes you can prepare</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page9.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>5 great pizza restaurants you should visit this city</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page10.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>5 great cooking gadgets you can buy to save time</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page11.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>How to prepare a delicious gluten free sushi</p>
              </div>
            </div>
            <div className={styles.poster}>
              <Link href="/blogspage">
                {" "}
                <img src="/page12.png" alt="" />
              </Link>
              <div className={styles.textLittle}>
                <h3>January 3, 2023</h3>
                <p>Top 20 simple and quick desserts for kids</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogss;
