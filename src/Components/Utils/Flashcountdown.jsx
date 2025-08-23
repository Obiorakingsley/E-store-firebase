import React, { useContext } from "react";
import { FaChevronRight } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useFlashSale } from "../Contexts/Flashsalescontext";

const Flashcountdown = () => {
  const timeLeft = useFlashSale();
  return (
    <div className="flash-sales">
      <div className="tag-section">
        <GiPriceTag size={40} />
        <h3>Flash Sales</h3>
      </div>

      <div className="countdown-section">
        <h2>
          Time Left: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </h2>
      </div>

      <div className="nav-section">
        <Link to={"/flash-sales"}>
          <p>
            See all <FaChevronRight />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Flashcountdown;
