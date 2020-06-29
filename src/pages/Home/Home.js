import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { ImageCard, BasicCard } from "../../components/Card";
import { H1 } from "../../components/Header";
import "./style.css"

const circleMax = require("../../assets/images/circleMax.png")
const devBlurb = `Full-Stack Web Developer specializing in advanced 
ReactJS Global State applications. Highly effective at creative 
problem solving, abstract idea development and detail oriented 
UX & component design.`

const guitarBlurb = `Seasoned professional guitarist with extensive 
touring & session experience. Fluent in many genres & styles, gifted
arranger and accompanist. Excellent collaborator & creative partner. `

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
              <h1>Max Kulicke</h1>
              <h4>Full Stack Web Developer</h4>
              <h4>Musician, Producer, Engineer</h4>
              <br />
              <h5>{devBlurb}</h5>
              <br />
              <h5>{guitarBlurb}</h5>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
