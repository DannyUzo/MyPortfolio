import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">My Portfolio</div>
      <div className="navbar-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/qualifications">Qualifications</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
