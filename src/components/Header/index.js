import React from "react";
import logo from "../../assets/logo.svg";
import Menu from "../Menu";
import "./style.css";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <Menu />
    </header>
  );
};

export default Header;
