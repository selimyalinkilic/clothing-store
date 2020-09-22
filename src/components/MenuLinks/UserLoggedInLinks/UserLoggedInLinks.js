import React from "react";
import { NavLink } from "react-router-dom";
import "./UserLoggedInLinks.scss";

const UserLoggedInLinks = () => {
  return (
    <div className="logged-in-links-container">
      <NavLink to="/orders" className="logged-in-link" activeClassName="active">
        Orders
      </NavLink>
      <NavLink
        to="/account"
        className="logged-in-link"
        activeClassName="active"
      >
        Account
      </NavLink>
      <NavLink
        to="/favorites"
        className="logged-in-link"
        activeClassName="active"
      >
        Favorites
      </NavLink>
      <NavLink
        to="/sign-out"
        className="logged-in-link"
        activeClassName="active"
      >
        Sign Out
      </NavLink>
    </div>
  );
};

export default UserLoggedInLinks;
