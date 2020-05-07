import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card"
import Jumbotron from "../../components/Jumbotron"
import "./style.css"


function FourOhFour() {
  return (
    <div id="fourOhFour">
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
          <Container fluid>
            <h2>404: PAGE NOT FOUND AMIGO</h2>
          </Container>
        </Col>
        <Col size="md-1"></Col>
      </Row >
    </div>
  );
}

export default FourOhFour;
