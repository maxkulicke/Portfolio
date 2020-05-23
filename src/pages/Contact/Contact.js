import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import ContactForm from "../../components/ContactForm";
// import MyForm from "../../components/MyForm"
import "./style.css"



function Contact() {
  return (
    <div id="contact">
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
          <Container fluid>
            {/* <MyForm /> */}
            <ContactForm />
          </Container>
        </Col>
        <Col size="md-1"></Col>
      </Row>
    </div>
  );
}

export default Contact;
