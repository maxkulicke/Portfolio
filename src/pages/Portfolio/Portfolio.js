import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import Jumbotron from "../../components/Jumbotron"
import { Button, Anchor } from "../../components/Button"
import Project from "../../components/Project"
import "./style.css"
const cms = require("../../assets/images/cms.jpg")
const bThere = require("../../assets/images/bthere.jpg")
const password = require("../../assets/images/passwordgenerator.jpg")
const dayPlanner = require("../../assets/images/dayplanner.jpg")
const portfolio = require("../../assets/images/portfolio.jpg")
const climate = require("../../assets/images/climateApp.jpg")
const majj = require("../../assets/images/majj.jpg")
const snake = require("../../assets/images/snake.jpg")


function Portfolio() {
  return (
    <div id="portfolio">
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
          <Container fluid className="portfolio">
            <h2>Projects</h2>

            <Row>
              <Col size="md-5">
                <Project>
                  <img src={majj} className="card-img portfolio-img" alt="MAJJ"
                    id="majjImg" />
                  <h5 className="card-title">MAJJ</h5>
                  <p className="card-text">A web 'mining' app for news and content</p>
                  <Anchor href="www.majj.app" className="btn"
                    target="_blank">Visit</Anchor>
                  <Anchor href="https://github.com/maxkulicke/HW3/" className="btn"
                    target="_blank">Repo</Anchor>
                </Project>
              </Col>
              <Col size="md-5">
                <Project>
                  <img src={climate} className="card-img portfolio-img" alt="Climate App"
                    id="climateImg" />
                  <h5 className="card-title">Local Climate App</h5>
                  <p className="card-text">Allows user to access, process and graph federal climate data for
                  any county in the United States</p>
                  <Anchor href="https://ancient-reef-68356.herokuapp.com/"
                    className="btn" target="_blank">Visit</Anchor>
                  <Anchor href="https://github.com/maxkulicke/local-climate-app"
                    className="btn" target="_blank">Repo</Anchor>
                </Project>
              </Col>
            </Row>

            <Row>
              <Col size="md-5">
                <Project>
                  <img src={password} className="card-img portfolio-img" alt="Password Generator"
                    id="passwordImg" />
                  <h5 className="card-title">Password Generator</h5>
                  <p className="card-text">A random password generator with user defined parameters, 
                  built with React</p>
                  <Anchor href="https://frozen-fortress-06984.herokuapp.com/" className="btn"
                    target="_blank">Visit</Anchor>
                  <Anchor href="https://github.com/maxkulicke/Password-Generator" className="btn"
                    target="_blank">Repo</Anchor>
                </Project>
              </Col>
              <Col size="md-5">
                <Project>
                  <img src={snake} className="card-img portfolio-img" alt="Snake"
                    id="cmsImg" />
                  <h5 className="card-title">Snake</h5>
                  <p className="card-text">My version of the classic game, designed and build from the ground
                  up, written in Java</p>
                  <Anchor a href="https://github.com/maxkulicke/Snake"
                    target="_blank">Repo</Anchor>
                </Project>
              </Col>
            </Row>

            <Row>
              <Col size="md-5">
                <Project>
                  <img src={portfolio} className="card-img portfolio-img" alt="Day Planner" id="plannerImg" />
                  <h5 className="card-title">Personal Portfolio</h5>
                  <p className="card-text">My personal website, made with React</p>
                  <Anchor href="https://maxkulicke.herokuapp.com/portfolio" className="btn"
                    target="_blank">Visit</Anchor>
                  <Anchor href="https://github.com/maxkulicke/React-Portfolio" className="btn"
                    target="_blank">Repo</Anchor>
                </Project>
              </Col>
              <Col size="md-5">
                <Project>
                  <img src={dayPlanner} className="card-img portfolio-img" alt="Day Planner" id="plannerImg" />
                  <h5 className="card-title">Day Planner App</h5>
                  <p className="card-text">Planner for a work day,
                        stores schedule and updates throughout the day</p>
                  <Anchor href="https://maxkulicke.github.io/HW5/" className="btn"
                    target="_blank">Visit</Anchor>
                  <Anchor href="https://github.com/maxkulicke/HW5" className="btn"
                    target="_blank">Repo</Anchor>
                </Project>
              </Col>
            </Row>

            <Row>
              <Col size="md-5">
                <Project>
                  <img src={bThere} className="card-img portfolio-img" alt="B.There"
                    id="bThereImg" />
                  <h5 className="card-title">Event Planner and Storage App</h5>
                  <p className="card-text">Allows user to store a calendar of events they are interested in</p>
                  <Anchor href="https://maxkulicke.github.io/Group-Project-1/"
                    className="btn" target="_blank">Visit</Anchor>
                  <Anchor href="https://github.com/maxkulicke/b.there"
                    className="btn" target="_blank">Repo</Anchor>
                </Project>
              </Col>
              <Col size="md-5">
              <Project>
                  <img src={cms} className="card-img portfolio-img" alt="Content Management System"
                    id="cmsImg" />
                  <h5 className="card-title">Content Management System</h5>
                  <p className="card-text">A command line CMS to manage a hypothetical company and employees</p>
                  <Anchor a href="https://github.com/maxkulicke/HW12/"
                    target="_blank">Repo</Anchor>
                </Project>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
