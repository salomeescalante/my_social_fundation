import React from "react";
import axios from "axios";

class Contacto extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    axios.post("/api/contacto", { name, email, message }).then(res => {
      console.log(res);
    });
    this.setState({ name: "", email: "", message: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="container">
        <h1>Contacto</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nameInput">Nombre:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="form-control"
              id="nameInput"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-control"
              id="emailInput"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="messageTextarea">Mensaje:</label>
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
              className="form-control"
              id="messageTextarea"
              rows="7"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Contacto;
