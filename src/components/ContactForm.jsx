// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("<your-form-endpoint-url>", formData)
      .then(setFormSubmitted(true))
      .catch(setFormSubmitError(true));
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {!formSubmitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
      {formSubmitted && (
        <p>Thank you for contacting us! We will respond as soon as possible.</p>
      )}
      {formSubmitError && (
        <p>
          Sorry, there was a problem submitting the form. Please try again later.
        </p>
      )}
    </div>
  );
}

export default ContactForm;
