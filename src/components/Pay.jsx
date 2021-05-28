import React from "react";
import Cards from "react-credit-cards";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./Form.jsx";

import "react-credit-cards/es/styles-compiled.css";

// https://www.npmjs.com/package/react-credit-cards
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (evt) => {
    this.setState({ focus: evt.target.name });
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
    //const userOrder = this.props.userOrder;
    //console.log(userOrder);
    const addToUserOrder = this.props.addToUserOrder;
    const basketItems = this.props.basket;

    function submitPayment() {
      const form = document.querySelector("#form");
      const email = form.email.checkValidity();
      const cardNumber = form.number.checkValidity();
      const name = form.name.checkValidity();
      const expiry = form.expiry.checkValidity();
      const cvc = form.cvc.checkValidity();

      if (
        email != false &&
        cardNumber != false &&
        name != false &&
        expiry != false &&
        cvc != false
      ) {
        const nameLowerCase =
          form.name.value.substring(0, 1).toUpperCase() +
          form.name.value.substring(1).toLowerCase();

        const firstName = nameLowerCase.substring(
          0,
          nameLowerCase.indexOf(" ")
        );

        //console.log(firstName);
        //console.log(form.email.value);
        //console.log(form.number.value);
        //console.log(form.name.value);
        //console.log(form.expiry.value);
        //console.log(form.cvc.value);

        const basketList = [];
        basketItems.forEach(basketItem);
        function basketItem(item) {
          const beer = item.name;
          const amount = item.amount;
          basketList.push({ name: beer, amount: amount });
        }

        const orderList = [];
        basketList.forEach((item) => {
          for (let i = 0; i < item.amount; i++) {
            orderList.push(item.name);
          }
        });

        post(basketList, firstName, orderList);
      } else {
        console.log("not valid");
      }
    }

    async function post(data, firstName, orderList) {
      const newOrder = [];
      const id = [];
      const name = firstName;
      const order = orderList;
      const url = "https://foobarsiwmorten.herokuapp.com/order";

      fetch(url, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((d) => {
          console.log("Posted order.");
          console.log(d);
          id.push(d.id);
        });

      console.log(firstName);
      console.log(order);
      console.log(id);

      newOrder.push({ id: id, order: order, name: name });
      addToUserOrder(newOrder);
    }

    return (
      <div id="PaymentForm">
        <form id="form">
          <div className="form-group">
            <label className="" htmlFor="email">
              E-MAIL
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="form-control"
              required
              id="email"
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
              id="number"
            />
            <span>PLEASE ENTER YOUR CARD NUMBER CORRECTLY </span>
          </div>
          <div className="form-group">
            <label className=""> CARDHOLDER NAME </label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              id="name"
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
                id="expiry"
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
                id="cvc"
              />
              <span>PLEASE ENTER THE CVC OF YOUR CARD </span>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={submitPayment}
            >
              PAY
            </button>
          </div>
        </form>
      </div>
    );
  }
}
