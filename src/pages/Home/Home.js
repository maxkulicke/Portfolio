import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { ImageCard, BasicCard } from "../../components/Card";
import { H1 } from "../../components/Header";
import "./style.css"

const circleMax = require("../../assets/images/circleMax.png")

function Home() {
  return (
    <div id="home">
      <Row>
        <Col size="md-6">
          <Container fluid id="circle">
            <img src={circleMax} alt="Max" id="circleMax" />
          </Container>
        </Col>
        <Col size="md-6">
          <Container fluid>
            <div id="homeText">
              <h2>Max Kulicke</h2>
              <h5>Full Stack Web Developer</h5>
              <h5>Musician, Producer, Engineer</h5>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
