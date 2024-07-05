import React from "react";
import styles from "./about.module.css";
import VideoPage from "@/components/videoPage/page";
import LittleInfo from "@/components/littleInfo/page";
import Testimonial from "@/components/testimonial/page";
const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imgandInfo}>
            <img src="/aboutF.png" alt="" />
            <div className={styles.infoBorad}>
              <h1>Come and visit us</h1>
              <i className={"fa-solid fa-mobile-screen-button "}>
                <span className={styles.phone}>(414) 857 - 0107</span>
              </i>
              <i className={"fa-regular fa-envelope"}>
                <span className={styles.email}>happytummy@restaurant.com</span>
              </i>
              <i className={"fa-regular fa-compass"}>
                <span className={styles.location}>
                  837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                </span>
              </i>
            </div>
          </div>
          <div className={styles.textSection}>
            <h1>We provide healthy food for your family.</h1>
            <p className={styles.firstP}>
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className={styles.secondP}>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
      </div>
      <VideoPage />
      <LittleInfo />
      <Testimonial />
    </div>
  );
};

export default About;
