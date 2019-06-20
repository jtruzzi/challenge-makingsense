import React from "react";
import { css } from "glamor";
import { connect } from "react-redux";

const ProgressLoader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return <div className={`${loaderCss}`} />;
};

const progressAnimation = css.keyframes({
  from: {
    left: "-200px",
    width: "30%"
  },
  "50%": {
    width: "30%"
  },
  "70%": {
    width: "70%"
  },
  "80%": {
    left: "50%"
  },
  "95%": {
    left: "120%"
  },
  to: {
    left: "100%"
  }
});

const loaderCss = css({
  height: "4px",
  width: "100%",
  top: "0",
  right: "0",
  left: "0",
  position: "fixed",
  overflow: "hidden",
  backgroundColor: "#ddd",

  "&:before": {
    display: "block",
    position: "absolute",
    content: " ",
    left: "-200px",
    width: "200px",
    height: "4px",
    backgroundColor: "#2980b9",
    animation: `${progressAnimation} 2s linear infinite`
  }
});

const mapStateToProps = state => {
  return {
    isLoading:
      state.charactersReducer.isLoading ||
      state.characterDetailsReducer.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(ProgressLoader);
