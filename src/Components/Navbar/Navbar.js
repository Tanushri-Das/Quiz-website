import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="header">
        <div>
          <h1 className="website-name">WebTesty</h1>
        </div>

        <div className="text-right">
          <Link to="/">Topics</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
