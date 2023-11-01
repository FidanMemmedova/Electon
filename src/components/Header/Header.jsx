import React from "react";
import LogoImage from "./../img/electonLogo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-left-item">
            <img src={LogoImage} alt="logo" />
            <div className="search">
              <div>
                <input type="text" placeholder="Search any things.." />
              </div>
              <button>Search</button>
            </div>
          </div>
          <div className="header-right-item">
            <ul>
              <li>
                <p>Sign in</p>
              </li>
              <li>
                <p>Sign in</p>
              </li>
              <li>
                <p>Cart</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
