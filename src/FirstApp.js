import React from "react";
import PropTypes from "prop-types";
const FirstApp = ({ wave, subtitle }) => {
  return (
    <>
      <h1>{wave}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  wave: PropTypes.string.isRequired,
};
FirstApp.defaultProps = {
  subtitle: "I'm subtitle",
};
export default FirstApp;
