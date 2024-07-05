"use client";

import React, { useState, useEffect } from "react";

import styles from "./blogs.module.css";
import Services from "@/components/services/page";
import Link from "next/link";

const BlogsPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    console.log("Scrolling to the top...");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Event handler to show the "Back to Top" button when scrolling
  const handleScroll = () => {
    if (window.scrollY > 100) {
      console.log("Show Back to Top");
      setShowBackToTop(true);
    } else {
      console.log("Hide Back to Top");
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add a scroll event listener to the window
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container2}>
          {showBackToTop && (
            <div className={styles.backToTop}>
              <a href="#" onClick={scrollToTop}>
                <span>↑</span>
              </a>
            </div>
          )}
          <Link href="/pages">
            <button>
              <i className="fa-solid fa-backward-fast">
                <span>Read More..</span>
              </i>
            </button>
          </Link>
          <div className={styles.article}>
            <div className={styles.title}>
              <h1>
                The secret tips & tricks to prepare a perfect burger & pizza for
                our customers
              </h1>
              <img src="/blogFirst.png" alt="" />
            </div>
            <div className={styles.textSection}>
              <div className={styles.firstSection}>
                <h1>What do you need to prepare a home-made burger?</h1>
                <p className={styles.firstp}>
                  Creating the perfect burger and pizza is an art, combining
                  ingredients, techniques, and passion to craft dishes that
                  truly delight the palate. Today, we'll unveil some closely
                  guarded secrets and insider tips for mastering these beloved
                  staples of the culinary world.
                </p>
                <p className={styles.anotherP}>
                  1. <span>Quality Beef:</span> The heart of a perfect burger is
                  top-notch beef. Opt for fresh, high-quality ground beef with a
                  fat content of about 20% for the juiciest, most flavorful
                  results.
                </p>
                <p className={styles.anotherP}>
                  2. <span>Seasoning:</span> Simplicity is key here. A generous
                  pinch of salt and black pepper just before cooking will
                  enhance the beef's natural flavors without overshadowing them
                </p>
                <p className={styles.anotherP}>
                  3. <span>Don’t Overwork the Meat:</span> When forming your
                  patties, be gentle. Overworking the meat can lead to dense,
                  tough burgers. You want a patty that's firm enough to hold
                  together, but not compressed.
                </p>
                <p className={styles.anotherP}>
                  4. <span>Cooking:</span> High heat is crucial. Whether you're
                  grilling or pan-searing, make sure your cooking surface is hot
                  enough to form a nice crust on the patty, sealing in those
                  delicious juices.
                </p>
                <p className={styles.anotherP}>
                  5. <span>Resting:</span> Allow your cooked burgers to rest for
                  a few minutes before serving. This lets the juices
                  redistribute throughout the patty, ensuring a moist and
                  flavorful bite.
                </p>
              </div>
              <div className={styles.firstSection}>
                <h1>What are the right ingredients to make it delicious?</h1>
                <p className={styles.firstp}>
                  Creating the perfect burger and pizza is an art, combining
                  ingredients, techniques, and passion to craft dishes that
                  truly delight the palate. Today, we'll unveil some closely
                  guarded secrets and insider tips for mastering these beloved
                  staples of the culinary world.
                </p>
                <p className={styles.anotherP}>
                  1. <span>Quality Beef:</span> The heart of a perfect burger is
                  top-notch beef. Opt for fresh, high-quality ground beef with a
                  fat content of about 20% for the juiciest, most flavorful
                  results.
                </p>
                <p className={styles.anotherP}>
                  2. <span>Seasoning:</span> Simplicity is key here. A generous
                  pinch of salt and black pepper just before cooking will
                  enhance the beef's natural flavors without overshadowing them
                </p>
                <p className={styles.anotherP}>
                  3. <span>Don’t Overwork the Meat:</span> When forming your
                  patties, be gentle. Overworking the meat can lead to dense,
                  tough burgers. You want a patty that's firm enough to hold
                  together, but not compressed.
                </p>
                <p className={styles.anotherP}>
                  4. <span>Cooking:</span> High heat is crucial. Whether you're
                  grilling or pan-searing, make sure your cooking surface is hot
                  enough to form a nice crust on the patty, sealing in those
                  delicious juices.
                </p>
                <p className={styles.anotherP}>
                  5. <span>Resting:</span> Allow your cooked burgers to rest for
                  a few minutes before serving. This lets the juices
                  redistribute throughout the patty, ensuring a moist and
                  flavorful bite.
                </p>
              </div>
              <img src="/blogSecond.png" alt="" />
              <div className={styles.lastSection}>
                <h1>What are the right ingredients to make it delicious?</h1>

                <p>
                  Proin faucibus nec mauris a sodales, sed elementum mi
                  tincidunt. Sed eget viverra egestas nisi in consequat. Fusce
                  sodales augue a accumsa Cras sollicitudin, le ligula,
                  porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit lobortis arcu enim
                  urna adipiscing praesent velit viverra sit semper lorem eu
                  cursus ve of all hendrerit elementum morbi curabitur etiam
                  nibh justo, lorem aliquet donec sed sit mi dignissim at ante
                  massa mattis magna sit amet purus gravida quis blandit
                  turpis..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services */}
      <div>
        <div className={styles.services}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>Read More Articles</h1>
              <p>
                We consider all the drivers of change gives you the components
                you need to change to create a truly happens.
              </p>
            </div>

            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <img src="/article1.png" alt="" />
                <div className={styles.bottom}>
                  {" "}
                  <h1>January 3, 2023</h1>
                  <p>How to prepare a delicious gluten free sushi</p>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/article2.png" alt="" />
                <div className={styles.bottom}>
                  <h1>January 3, 2023</h1>
                  <p>Exclusive baking lessons from the pastry king</p>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/article3.png" alt="" />
                <div className={styles.bottom}>
                  <h1>January 3, 2023 </h1>
                  <p>How to prepare the perfect fries in an air fryer</p>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/article4.png" alt="" />
                <div className={styles.bottom}>
                  <h1> January 3, 2023</h1>{" "}
                  <p>How to prepare delicious chicken tenders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
