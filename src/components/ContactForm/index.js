import React, { useState } from "react";
import Card from "../Card";
import Container from "../Container/index";
import Button from "../Button/index"
import axios from "axios"


function ContactForm() {

  // const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(formObject);

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: formObject
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  function resetForm() {
    console.log("reset")
    setFormObject({ ...formObject, name: "", email: "", message: "" })

  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  return (
    <div>
      <h2>Get In Touch!</h2>
      <h5>Drop me a message and i'll get back to you soon!</h5>
      <form>
        <div className="form-group">
          <input
            type="name"
            className="form-control"
            id="nameInput"
            placeholder="your name (required)"
            onChange={handleInputChange}
            name="name"
          ></input>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="emailAddressInput"
            onChange={handleInputChange}
            name="email"
            placeholder="email (required)"
          ></input>
        </div>
        <div className="form-group">
          <textarea
            className="form-control" id="messageTextArea" rows="3"
            onChange={handleInputChange}
            name="message"
            placeholder="leave your message here"
          ></textarea>
        </div>
        <Button onClick={handleFormSubmit}>Send</Button>
      </form>
    </div>
  );
}

export default ContactForm;
