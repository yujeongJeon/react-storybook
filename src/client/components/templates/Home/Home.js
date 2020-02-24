import "./Home.style.css";

import React from "react";
import { Container } from "reactstrap";
import { Header, Intro, Profile } from "../../organisms";

const Home = _ => {
  return (
    <>
      <Header />
      <Container fluid className="wrapper">
        <Intro />
        <Profile />
      </Container>
    </>
  );
};

export default Home;
