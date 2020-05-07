import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card"
import { H1, H2, H3 } from "../../components/Header"
import IFrame from "../../components/IFrame/"
import imageUrl from "../../assets/images/babyMax.jpg"
import "./style.css"


function Music() {
  return (
    <div id="music">
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
          <Container fluid>
            <h2>Music</h2>
            <h5>A sampling of my live and recorded work</h5>
            <IFrame
              src="https://open.spotify.com/embed/playlist/2jYT2jA70EZOFhL8WikqSK"
              width="560"
              height="315"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
            <IFrame
              src="https://www.youtube.com/embed/4yA1mJIxqns"
              width="560"
              height="315"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            />
          </Container>
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
    </div>
  );
}

export default Music;
