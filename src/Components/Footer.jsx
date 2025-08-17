import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-action">
          <div className="footer-company">
            <p className="footer-head">Company</p>
            <p>Contact</p>
            <p>About</p>
            <p>Features</p>
            <p>Customers</p>
            <p>Blogs</p>
          </div>

          <div className="footer-categories">
            <p className="footer-head">Category</p>
            <p>Phones & Tablets</p>
            <p>Home & Office</p>
            <p>Appliances</p>
            <p>Eletronics</p>
            <p>Fassion</p>
            <p>Beauty</p>
          </div>
          <div className="footer-help">
            <p className="footer-head">Help</p>
            <p>Account</p>
            <p>Delivery details</p>
            <p>Customer support</p>
            <p>Payment</p>
            <p>Orders</p>
          </div>
        </div>

        <div className="footer-subscribe">
          <p className="footer-head">
            Subscribe to our newsletter to Get the latest updates and offers.
          </p>
          {/* <form>
            <div className="input-container">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </div>
          </form> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;{new Date().getFullYear()} E-Store. All rights reserved.</p>
        <div className="footer-social">
          <FaGithub />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
