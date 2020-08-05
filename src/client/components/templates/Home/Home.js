import "./Home.style.css";

import React from "react";
import { Container } from "reactstrap";
import { Header, Intro, Profile, Skill } from "../../organisms";
import Example from "../../commons/Example";

const Home = _ => {
  return (
    <Example />
  )
  return (
    <>
      <Header />
      <Container fluid className="wrapper">
        <Intro />
        <Profile />
        <Skill />
        <div style={{
          width: "500px",
          margin: "10px 20px"
        }}>
          <Example />
        </div>
      </Container>
    </>
  );
};

export default Home;
