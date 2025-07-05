import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="/#about">About</a></li>
      <li><a href="/#developers">Developers</a></li>
      <li><a href="/#subscribe">Stay Updated</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
