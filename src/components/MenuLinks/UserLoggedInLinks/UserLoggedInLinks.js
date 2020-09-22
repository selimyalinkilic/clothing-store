import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../../utils/firebase";
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
      <div className="logged-in-link" onClick={() => auth.signOut()}>
        Sign Out
      </div>
    </div>
  );
};

export default UserLoggedInLinks;
