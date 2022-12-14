import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
