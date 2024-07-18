import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <li className="navbar-brand"><Link to="/">Inicio</Link></li>
      <li className="navbar-brand"><Link to="/historial">Historial</Link></li>
    </nav>
  );
};

export default Navbar;
