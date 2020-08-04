import "./Home.style.css";

import React from "react";
import { Container } from "reactstrap";
import { Header, Intro, Profile, Skill } from "../../organisms";
import Example from "../../commons/Example";

const Home = _ => {
  return (
    <>
      <Header />
      <Container fluid className="wrapper">
        <Intro />
        <Profile />
        <Skill />
        <Example />
      </Container>
    </>
  );
};

export default Home;
