import "./Home.style.css";

import React from "react";
import { Container } from "reactstrap";
import { Header, Intro } from "../../organisms";

const Home = _ => {
  return (
    <>
      <Header />
      <Container fluid>
        <Intro />
      </Container>
    </>
  );
};

export default Home;
