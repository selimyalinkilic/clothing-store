import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import UserLoggedInLinks from "../UserLoggedInLinks/UserLoggedInLinks";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
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
              <UserLoggedInLinks />
            </div>
          </div>
        ) : (
          <NavLink className="option" activeClassName="active" to="/sign-in">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
