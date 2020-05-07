import React from "react";
import { Card } from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css"
const Max = require("../../assets/images/max_on_box.jpg")

function About() {

  return (

    <div id="about">
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
          <Container fluid>
            <h2>About Me</h2>
            <Row>
              <Col size="md-6">
                <img src={Max} id="maxOnBox" alt="max" />
              </Col>
              <Col size="md-6">

                <p>
                  Live and Studio guitarist
              <br />
                  <br />
              Full Stack Web Developer
              Technologies:
              </p>
                <ul>
                  <li>Node JS</li>
                  <li>React</li>
                  <li>mySQL</li>
                  <li>Mongo</li>
                  <li>Express</li>
                </ul>
                <p>
                  Music Teacher
                </p>

              </Col>
            </Row>
          </Container>
        </Col>
        <Col size="md-1"></Col>
      </Row>
    </div>

  );
}

export default About;
