import React from "react";

const MyAccountPage = ({ currentUser }) => {
  return <div>Welcome {currentUser ? currentUser.displayName : "X"}</div>;
};

export default MyAccountPage;
