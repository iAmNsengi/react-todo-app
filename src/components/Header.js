import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  const onClick = (e) => {
    console.log("cliked");
  };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button onClick={onClick} text="Add" color="green" />
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
