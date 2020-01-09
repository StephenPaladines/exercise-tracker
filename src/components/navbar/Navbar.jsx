import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import Button from "../button/Button";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Tracker
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="navbar-item">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
        </ul>
        {!user ? null : (
          <ul className="navbar-nav">
            <Link to="/profile" className="nav-link" id="avatar-picture">
              <img
                id="avatar-picture"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Faccount-profile-avatar-man-circle-round-user-30452.png&f=1&nofb=1"
                alt="avatar"
              />
            </Link>
          </ul>
        )}
        {!isAuthenticated && (
          <Button name="Log in" handleChange={() => loginWithRedirect({})} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
