import React from "react";
import "./contact.css";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea></textarea>
        </label>
        <br />
        <Button variant="primary">Send</Button>
      </form>
    </div>
  );
}

export default Contact;
