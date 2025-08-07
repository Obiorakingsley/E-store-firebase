import React, { useEffect, useRef, useState } from "react";
import "./Styles/Nav.css";
import {
  FaChevronDown,
  FaHome,
  FaBlender,
  FaTshirt,
  FaMobile,
  FaUser,
  FaUserPlus,
  FaChevronUp,
  FaSearch,
} from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { GiLipstick } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [selectMenu, setSelectmenu] = useState(false);

  // Main Menu

  function handleMenu() {
    setMenu((prev) => {
      return !prev;
    });
  }

  // Account menu
  function handleSelectMenu() {
    setSelectmenu((prev) => {
      return !prev;
    });
  }

  const select = useRef();
  const dropDown = useRef();

  function useClickOutside(ref, setMenu) {
    useEffect(() => {
      const handler = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenu(false);
        }
      };
      document.addEventListener("click", handler);
      return () => {
        document.removeEventListener("click", handler);
      };
    }, [menu, selectMenu]);
  }

  //Account menu
  useClickOutside(select, () => {
    setSelectmenu(false);
  });

  // Menu
  useClickOutside(dropDown, () => {
    setMenu(false);
  });

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="menu">
          <img
            ref={dropDown}
            onClick={handleMenu}
            src="/menu.png"
            alt="menu icon"
            width={25}
            height={25}
          />
          <nav className={`menu-nav ${menu ? "open" : ""}`}>
            <ul>
              <li>
                <FaMobile />
                Phones & Tablets
              </li>
              <li>
                <FaHome />
                Home & Office
              </li>
              <li>
                <FaBlender />
                Appliances
              </li>
              <li>
                <FaTshirt />
                Fassion
              </li>
              <li>
                <FaTv />
                Eletronics
              </li>
              <li>
                <GiLipstick />
                Beauty
              </li>
            </ul>
          </nav>
        </div>
        <h1 className="logo">
          Estore{" "}
          <img
            className="logo-img"
            src="/estore.png"
            alt=""
            width={30}
            height={20}
          />
        </h1>
      </div>

      <div className="navbar-center">
        <input className="input-search" type="text" placeholder="Search" />
        <span className="search-icon">
          <FaSearch size={20} />
        </span>
      </div>

      <div className="navbar-right">
        <div
          onMouseEnter={() => {
            setSelectmenu(true);
          }}
          ref={select}
          onClick={handleSelectMenu}
          className="account"
          onMouseLeave={() => {
            setSelectmenu(false);
          }}
        >
          <img src="/user.png" alt="user icon" width={25} height={25} />
          <div className="select">
            Account
            {selectMenu ? (
              <FaChevronDown size={13} />
            ) : (
              <FaChevronUp size={13} />
            )}
            <nav
              onMouseLeave={() => {
                setSelectmenu(false);
              }}
              className={`account-action
                ${selectMenu ? " display" : ""}`}
            >
              <button className="account-btn-signin">Sign In</button>
              <div className="account-btn">
                <FaUserPlus />
                Sign Up
              </div>
              <div className="account-btn">
                <FaUser />
                My Account
              </div>
            </nav>
          </div>
        </div>
        <div className="cart">
          <img src="/cart.png" alt="cart icon" width={25} height={25} />
          <span className="hidden">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
