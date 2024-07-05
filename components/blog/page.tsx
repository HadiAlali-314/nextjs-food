import React from "react";
import styles from "./blog.module.css";
import Link from "next/link";
const Blog = () => {
  return (
    <div>
      <div className={styles.blogContainer}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Our Blog & Articles</h1>
            <Link href="/pages" style={{ textDecoration: "none" }}>
              <button>
                <span>Read All Articles</span>
              </button>
            </Link>
          </div>
          <div className={styles.cards}>
            <div className={styles.leftCard}>
              <Link href="/blogspage">
                <img src="/bigcard.png" alt="" />
              </Link>
              <h3>January 3, 2023</h3>
              <h1>
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim
                semper adipiscing massa gravida nisi cras enim quis nibholm
                varius amet gravida ut facilisis neque egestas.
              </p>
            </div>
            <div className={styles.rightCards}>
              <div className={styles.rightCardsTexts}>
                <Link href="/blogspage">
                  <img src="/card1.png" alt="" />
                </Link>
                <h3>January 3, 2023</h3>
                <h1>How to prepare the perfect french fries in an air fryer</h1>
              </div>
              <div className={styles.rightCardsTexts}>
                <Link href="/blogspage">
                  <img src="/card2.png" alt="" />
                </Link>
                <h3>January 3, 2023</h3>
                <h1>How to prepare delicious chicken tenders</h1>
              </div>
              <div className={styles.rightCardsTexts}>
                <Link href="/blogspage">
                  <img src="/card3.png" alt="" />
                </Link>
                <h3>January 3, 2023</h3>
                <h1>7 delicious cheesecake recipes you can prepare</h1>
              </div>
              <div className={styles.rightCardsTexts}>
                <Link href="/blogspage">
                  <img src="/card4.png" alt="" />
                </Link>
                <h3>January 3, 2023</h3>
                <h1>5 great pizza restaurants you should visit this city</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
