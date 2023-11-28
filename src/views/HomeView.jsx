import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import AboutMe from "../components/AboutMe";
import Skill from "../components/Skill";
import Study from "../components/Study";
import Career from "../components/Career";
import Award from "../components/Award";
import Port from "../components/Port";
import Others from "../components/Others";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Home from "../components/Home";

const HomeView = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main>
          <Home />
          <AboutMe />
          <Skill />
          <Study />
          <Career />
          <Award />
          <Port />
          <Others />
        </Main>
        <Footer />
    </>
  )
}

export default HomeView;