"use client";

import Image from "next/image";
import "./globals.css";
import { trace } from "console";
import BrowseOurMenu from "@/components/browseOurMenu/page";
import Aboutt from "@/components/about/page";
import Services from "@/components/services/page";
import Content from "@/components/content/page";
import Testimonial from "@/components/testimonial/page";
import Blog from "@/components/blog/page";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="container">
        <img src="/1.png" alt=" " />
        <div className="infoContainer">
          <h1>Best food for your taste</h1>
          <p>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="buttons">
            <Link href="/bookaTable" style={{ textDecoration: "none" }}>
              <button>
                <span>Book A Table</span>
              </button>
            </Link>
            <Link href="/menu" style={{ textDecoration: "none" }}>
              <button>
                <span>Explore Menu</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <BrowseOurMenu />

        <Aboutt />
        <Services />
        <Content />
        <Testimonial />
        <Blog />
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </div>
  );
};

export default Home;
