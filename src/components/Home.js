import React from "react";
import { css } from "glamor";
import List from "./home/List";
import Details from "./home/Details";
import Loading from "./Loading";

class Home extends React.Component {
  render() {
    return (
      <div className={`${containerCss}`}>
        <Loading />
        <List />
        <Details />
      </div>
    );
  }
}

const containerCss = css({
  display: "grid",
  gridTemplateColumns: "600px auto",
  gridColumnGap: "20px"
});

export default Home;
