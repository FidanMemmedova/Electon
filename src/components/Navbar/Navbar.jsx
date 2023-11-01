import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">

      <div className="container">
        <div className="categories">
          <button>Browse categories</button>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="##">Catalog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className="guarantee-text">
          <p>30 Days Free Return</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
