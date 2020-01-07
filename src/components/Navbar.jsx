import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Tracker
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Profile
            </Link>
          </li> */}
        </ul>
        <ul className="navbar-nav">
          <img
            alt="avatar"
            src="http://lorempixel.com/40/40/sports/"
            id="avatar-picture"
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
