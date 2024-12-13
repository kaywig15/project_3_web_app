import React, { useState } from "react";
import "./contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contact() {
  // Setting up state for each form field
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For now, just log the form data
    // You can add form submission logic here (e.g., API call)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formComments">
        <Form.Label>Comments</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
