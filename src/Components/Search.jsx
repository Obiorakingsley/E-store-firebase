import React from "react";
import "./Styles/Search.css";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div style={{ minHeight: "90vh" }}>
      <div className="search-navbar">
        <Link to={".."}>
          <span>
            <FaArrowLeft size={20} />
          </span>
        </Link>
        <input type="text" placeholder="Search" />
        <span className="search-icon">
          <Link to={"/search"}>
            <FaSearch size={20} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Search;
