import React from "react";
import "./CustomAlert.scss";

const CustomAlert = ({
  text,
  type,
  positionX,
  positionY,
  visible,
  handleClick,
}) => {
  return (
    <div
      className={`custom-alert alert-type-${type} alert-x-${positionX} alert-y-${positionY} ${
        visible ? "show" : ""
      }`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default CustomAlert;
