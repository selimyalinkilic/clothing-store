import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UserLoggedInLinks from "./UserLoggedInLinks/UserLoggedInLinks";
import "./MenuLinks.scss";

const MenuLinks = ({ currentUser }) => {
  return (
    <div className="options">
      <NavLink className="option" activeClassName="active" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="option" activeClassName="active" to="/contact">
        CONTACT
      </NavLink>
      {currentUser ? (
        <div className="option option-drop-down">
          MY ACCOUNT
          <div className="user-logged-in-links">
            <UserLoggedInLinks currentUser={currentUser} />
          </div>
        </div>
      ) : (
        <NavLink className="option" activeClassName="active" to="/sign-in">
          SIGN IN
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(MenuLinks);
