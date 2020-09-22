import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInSignUpPage from "./pages/SignInSignUpPage/SignInSignUpPage";
import MyAccountPage from "./pages/MyAccountPage/MyAccountPage";

import { auth, createUserProfileDocument } from "./utils/firebase";
import { setCurrentUser } from "./redux/user/user-action";

import "./App.css";

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
          <Route path="/my-account" component={MyAccountPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
