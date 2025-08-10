import React from "react";
import "./Styles/Hero.css";
import { FaArrowCircleRight } from "react-icons/fa";

import Flashcountdown from "./Flashcountdown";

function Hero() {
  return (
    <section className="hero-section">
      <div className="sales-countdown">
        <Flashcountdown />
      </div>
      <div className="cta-container">
        <h1>Deals you can't resist</h1>
        <h2>
          Thousands of products, one seamless checkout join
          <span className="cta-highlight">1M+</span> happy customers
        </h2>
        <div>
          <button className="cta-btn">
            Explore Products <FaArrowCircleRight size={25} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
