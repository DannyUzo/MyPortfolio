import React from "react";
import Sidenav from "../components/Sidenav";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div className="logo">My Portfolio</div>
      <div className="navbar-menu">
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/qualifications'>Qualifications</NavLink>
       <NavLink to='/contact'>Contact</NavLink>
       <NavLink to='/projects'>Projects</NavLink>
      </div>
   <Sidenav />
      
    </nav>
  );
};

export default Navbar;
