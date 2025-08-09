import React from "react";
import "./Styles/Hero.css";
import { FaArrowCircleRight, FaChevronRight, FaTag } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { useState, useEffect } from "react";
import Heroslide from "./Slider";

function Hero() {
  // State to manage the countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 21,
    minutes: 18,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.hours < 1)
          return { hours: prev.hours + 12, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="flash-sales">
        <div className="tag-section">
          <GiPriceTag size={40} />
          <h2>Flash Sales</h2>
        </div>

        <div className="countdown-section">
          <h2>
            Time Left: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </h2>
        </div>

        <div className="nav-section">
          <p>
            See all <FaChevronRight />
          </p>
        </div>
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
