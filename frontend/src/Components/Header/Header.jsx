import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header-image" src="/header_img.png" alt="header-image" />
      <div className="header-contents">
        <h2>Order your Favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and cuinary expertice. Our mission
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
