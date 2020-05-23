import React, { useState } from "react";
// import Card from "../Card";
// import Container from "../Container/index";
// import Button from "../Button/index"

function ContactForm() {
  const [formObject, setFormObject] = useState({})
  const [status, setStatus] = useState("")

  function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        resetForm();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
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
      <h2>Get In Touch</h2>
      <form
        onSubmit={submitForm}
        action="https://formspree.io/xbjzgrlo"
        method="POST"
      >
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
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    </div>
  );
}

export default ContactForm;
