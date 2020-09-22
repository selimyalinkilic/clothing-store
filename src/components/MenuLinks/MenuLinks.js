import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserLoggedInLinks from "./UserLoggedInLinks/UserLoggedInLinks";
import "./MenuLinks.scss";

const MenuLinks = ({ currentUser }) => {
  return (
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option option-drop-down">
          MY ACCOUNT
          <div className="user-logged-in-links">
            <UserLoggedInLinks currentUser={currentUser} />
          </div>
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(MenuLinks);
