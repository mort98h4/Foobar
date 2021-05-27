import React from "react";
import Cards from "react-credit-cards";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./Form.jsx";

// https://www.npmjs.com/package/react-credit-cards
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <form>
          <div className="form-group">
            <label className="" htmlFor="email">
              E-MAIL
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="form-control"
            />
            <span>WE WILL ONLY USE YOUR EMAIL TO SEND THE BILL </span>
          </div>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <div className="form-group">
            <label className=""> CARD NUMBER</label>
            <input
              type="tel"
              name="number"
              className="form-control"
              pattern="[\d| ]{19,22}"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <span>PLEASE ENTER YOUR CARD NUMBER CORRECTLY </span>
          </div>
          <div className="form-group">
            <label className=""> CARDHOLDER NAME </label>
            <input
              type="text"
              name="name"
              pattern="[A-Za-z]"
              className="form-control"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <span>PLEASE ENTER YOUR FULL NAME </span>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="">EXPIRY DATE </label>
              <input
                type="tel"
                name="expiry"
                className="form-control"
                pattern="\d\d/\d\d"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <span>PLEASE ENTER THE EXPERIENCE DATE OF YOUR CARD </span>
            </div>
            <div className="col-6">
              <label className=""> CVC </label>
              <input
                type="tel"
                name="cvc"
                className="form-control"
                pattern="\d{3,4}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <span>PLEASE ENTER THE CVC OF YOUR CARD </span>
            </div>
          </div>

          <div className="form-actions">
            <button className="btn btn-primary btn-block">PAY</button>
          </div>
        </form>
      </div>
    );
  }
}
