import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../images/logo.jpg";

function Nav() {
  return (
    <>
      <nav className="nav flex-column nav-pills" id="nav">
        <li>
          <img src={Logo} id="logo1" />
        </li>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/Gallery">Gallery</Link>
        </li>
      </nav>
    </>
  );
}
export default Nav;
