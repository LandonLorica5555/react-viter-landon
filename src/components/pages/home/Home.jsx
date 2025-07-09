import React from "react";
import Logo from "../../../svg/logo";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import Footer from "../../partials/Footer";
import Race from "./race/Race";
import Winners from "./winners/Winners";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Race />
      <Winners />
      <Footer />
    </>
  );
};

export default Home;
