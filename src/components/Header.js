import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { FaPlus, FaMinus } from "react-icons/fa";

const Header = ({ title, onAdd, showAdd }) => {
  const onClick = (e) => {
    return onAdd();
  };
  return (
    <header className="header">
      <h1>{title} </h1>
      <Button
        onClick={onClick}
        text={!showAdd ? <FaPlus /> : <FaMinus />}
        color={!showAdd ? "green" : "brown"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
