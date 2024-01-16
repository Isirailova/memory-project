import React from "react";
import PropTypes from "prop-types";
import "./myButton.style.css";

const MyButton = ({ onClickHandler, text, variant = "square" }) => {
  return (
    <button className={variant} onClick={onClickHandler}>
      {text}
    </button>
  );
};

MyButton.propTypes = {
  variant: PropTypes.oneOf(["rounded", "square"]),
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default MyButton;
