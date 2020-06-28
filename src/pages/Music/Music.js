import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card"
import { H1, H2, H3 } from "../../components/Header"
import IFrame from "../../components/IFrame/"
import imageUrl from "../../assets/images/babyMax.jpg"
import "./style.css"

let links = [
  "https://open.spotify.com/embed/playlist/2jYT2jA70EZOFhL8WikqSK",
  "https://www.youtube.com/embed/4yA1mJIxqns",
  "https://www.youtube.com/embed/QEIOF7WfkZk",
  "https://www.youtube.com/embed/LMpF5NrbcvI",
  "https://www.youtube.com/embed/FnWIFW0tAMs",
  "https://www.youtube.com/embed/eMZMX6FYOoo",
  "https://www.youtube.com/embed/gDpEGPhtrcc",
  "https://www.youtube.com/embed/i9pFtSLUbv4",
  "https://www.youtube.com/embed/pdbPJQhIIf8",
  "https://www.youtube.com/embed/aTyLYjf6_wI",
  "https://www.youtube.com/embed/NMwVmo-MYmU",
  "https://www.youtube.com/embed/AWEkXtLFVjc"
]

const makeIFrames = () => {
  let iFrames = links.map(link => {
    return (
      <IFrame
        src={link}
        width="560"
        height="315"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    )
  })
  return iFrames;
}


function Music() {


  let iFrames = makeIFrames();

  return (
    <div id="music">
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
          <Container fluid>
            <h2>Music</h2>
            <h5>A sampling of my live and recorded work</h5>
            {iFrames}
          </Container>
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
    </div>
  );
}

export default Music;
