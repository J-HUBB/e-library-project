import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

const Home = (props) => {
  return (
    <>
    <Landing />
    <Highlights />
    <Featured />
    <Discounted />
    <Explore />
    </>
  );
}

export default Home;
