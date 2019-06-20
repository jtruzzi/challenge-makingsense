import React from "react";
import List from "./home/List";
import Details from "./home/Details";
import Loading from "./Loading";

class Home extends React.Component {
  render() {
    return (
      <>
        <Loading />
        <List />
        <Details />
      </>
    );
  }
}

export default Home;
