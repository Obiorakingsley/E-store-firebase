import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaChevronRight, FaTag } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";

const Flashcountdown = () => {
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
  );
};

export default Flashcountdown;
