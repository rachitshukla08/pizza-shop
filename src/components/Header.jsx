import React from "react";
import logo from "../assets/logo2.png";

const Header = () => {
  return (
    <header>
      <div className="d-flex align-center h-9 gap-2 bg-tint-dark px-2">
        <img src={logo} className="logo" alt="Logo"></img>
        <span className="text-xl text-color-white logo-text">Pizzas</span>
      </div>
    </header>
  );
};

export default Header;
