import React, { Component } from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h1>Napisz do nas</h1>
          <textarea
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value.length > 0}
          message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?"
        />
      </div>
    );
  }
}

export default ContactPage;
