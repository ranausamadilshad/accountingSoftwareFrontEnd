/** @format */

import React, { useEffect } from "react";
import { useHistory } from "react-router";
import HomeScreen from "./HomeScreen";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (!!!localStorage.getItem("token")) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <HomeScreen />
    </>
  );
};

export default Home;
