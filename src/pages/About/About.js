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
                <h5>
                  I am a Philadelphia based web developer and musician.
                  Whether through music or programming, I constantly pursue
                  the creative rush of imagining something, seeing it in my
                  head, and then bringing it to life.
                  <br />
                  <br />
                  I bring to all of my endeavors a creative and imaginative mind,
                  a fierce work ethic, a collaborative sprit and the humility to know
                  I can always do better the next time. 
                  </h5>
                <br />

                <Row>
                  <Col size="md-6">
                    <h5>
                      Full Stack Web Developer
                  <br></br>
                  Technologies:
                </h5>
                    <ul>
                      <li>React/Redux</li>
                      <li>Node JS</li>
                      <li>Java</li>
                      <li>mySQL</li>
                      <li>Mongo</li>
                      <li>Express</li>
                    </ul>
                    <br />
                  </Col>
                  <Col size="md-6">
                    <h5>
                      Live and Studio Guitarist
                </h5>
                    <ul>
                      <li>Lead & Rhythm Electric</li>
                      <li>Lead & Rhythm Acoustic</li>
                      <li>Slide Guitar</li>
                      <li>Fingerstyle</li>
                      <li>Experimental</li>
                      <li>Arrangement & Composition</li>
                    </ul>
                    <br />
                    <br />
                  </Col>
                </Row>

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
