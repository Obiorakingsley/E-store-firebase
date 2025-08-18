import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
import { useContext } from "react";
import { cartContext } from "./Cartcontext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [selectMenu, setSelectmenu] = useState(false);
  const { cart } = useContext(cartContext);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

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
          <nav
            onMouseLeave={() => {
              setMenu(false);
            }}
            className={`menu-nav ${menu ? "open" : ""}`}
          >
            <ul>
              <Link to="products?type=phones">
                <li>
                  <FaMobile />
                  Phones & Tablets
                </li>
              </Link>
              <Link to="products?type=office">
                <li>
                  <FaHome />
                  Home & Office
                </li>
              </Link>
              <Link to="products?type=appliances">
                <li>
                  <FaBlender />
                  Appliances
                </li>
              </Link>
              <Link to="products?type=fashion">
                <li>
                  <FaTshirt />
                  Fassion
                </li>
              </Link>
              <Link to="products?type=electronics">
                <li>
                  <FaTv />
                  Eletronics
                </li>
              </Link>
              <Link to="products?type=beauty">
                <li>
                  <GiLipstick />
                  Beauty
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <Link to={"/"}>
          <h2 className="logo">
            Estore
            <img
              className="logo-img"
              src="/estore.png"
              alt=""
              width={30}
              height={20}
            />
          </h2>
        </Link>
      </div>

      <div className="navbar-center">
        <input className="input-search" type="text" placeholder="Search" />
        <Link to={"/search-product"}>
          <span className="search-icon search-product">
            <FaSearch size={20} />
          </span>
        </Link>
        <span className="search-icon search-page">
          <Link to={"/search"}>
            <FaSearch size={20} />
          </Link>
        </span>
      </div>

      <div className="navbar-right">
        <div ref={select} onClick={handleSelectMenu} className="account">
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
                ${selectMenu ? "display" : ""}`}
            >
              <Link to={"/login"}>
                <button className="account-btn-login">Login</button>
              </Link>

              <Link to={"/signup"}>
                <div className="account-btn">
                  <FaUserPlus />
                  Sign Up
                </div>
              </Link>
              <Link to={"/account"}>
                <div className="account-btn">
                  <FaUser />
                  My Account
                </div>
              </Link>
            </nav>
          </div>
        </div>
        <div className="cart">
          <Link to={"/cart"}>
            {totalQuantity > 0 && (
              <div className="total-cart-quantity">{totalQuantity}</div>
            )}
            <img src="/cart.png" alt="cart icon" width={25} height={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
