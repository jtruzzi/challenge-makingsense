import React from "react";
import List from "./home/List";
import Details from "./home/Details";
import ProgressLoader from "./ProgressLoader";

class Home extends React.Component {
  render() {
    return (
      <>
        <ProgressLoader />
        <List />
        <Details />
      </>
    );
  }
}

export default Home;
