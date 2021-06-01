import React from "react";
import Cards from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./Form.jsx";

/* 
We have used the npm package react-credit-cards for the payment form. 
The package includes the following:
  1. A card-flip function
  2. name, cvc, expiry and cardnumber input names to connect 
     changes to the flip-card function
  3. onChane to handleInputFocus and HandleInputChange
  4. Lots of possibilities of different card functions, payment functions and more.  
*/
// https://www.npmjs.com/package/react-credit-cards

import "react-credit-cards/es/styles-compiled.css";

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

  // on every change in input send target. Functions in form.jsx
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
    // defining props from card.jsx
    const addToUserOrder = this.props.addToUserOrder;
    const basketItems = this.props.basket;
    const resetBasket = this.props.resetBasket;
    const displayBasket = this.props.displayBasket;
    const ThankYouForOrdering = this.props.ThankYouForOrdering;

    function submitPayment() {
      const form = document.querySelector("#form");
      const email = form.email.checkValidity();
      const cardNumber = form.number.checkValidity();
      const name = form.name.checkValidity();
      const expiry = form.expiry.checkValidity();
      const cvc = form.cvc.checkValidity();
      const spanColor = "#f2b705";

      // if form is valid
      if (
        email != false &&
        cardNumber != false &&
        name != false &&
        expiry != false &&
        cvc != false
      ) {
        // Clean first name
        const nameLowerCase =
          form.name.value.substring(0, 1).toUpperCase() +
          form.name.value.substring(1).toLowerCase();
        const firstName = nameLowerCase.substring(
          0,
          nameLowerCase.indexOf(" ")
        );

        // create basket list for posting to Heroku
        const basketList = [];
        // for each item push name and amount to basketlist array.
        //used to posting to Heroku and creating correct data for ratingsystem
        basketItems.forEach(basketItem);
        function basketItem(item) {
          const beer = item.name;
          const amount = item.amount;
          basketList.push({ name: beer, amount: amount });
        }

        // create orderlist for rating system. Converte all beer amount into list of beer names.
        const orderList = [];
        basketList.forEach((item) => {
          for (let i = 0; i < item.amount; i++) {
            orderList.push(item.name);
          }
        });

        // post further down
        post(basketList, firstName, orderList);
        // resetform in App.jsx
        resetFrom();
      } else {
        // If the form isn't valid check for invalid input and display error message
        console.log("not valid");

        // email validate error txt
        if (email != true) {
          document.querySelector("#email span").style.color = "#f2b705";
        } else {
          document.querySelector("#email span").style.color = "#262626";
        }

        // cardnumber validate error txt
        if (cardNumber != true) {
          document.querySelector("#cardnumber span").style.color = "#f2b705";
        } else {
          document.querySelector("#cardnumber span").style.color = "#262626";
        }

        // card name validate error txt
        if (name != true) {
          document.querySelector("#cardname span").style.color = "#f2b705";
        } else {
          document.querySelector("#cardname span").style.color = "#262626";
        }

        //cvc and expiry validate error txt
        if (expiry != true && cvc != true) {
          document.querySelector("#multihint").textContent =
            "PLEASE ENTER THE EXPERIENCE DATE AND CVC NUMBER OF YOUR CARD";
          document.querySelector("#multihint").style.color = "#f2b705";
        } else if (expiry != true && cvc != false) {
          document.querySelector("#multihint").textContent =
            "PLEASE ENTER THE EXPERIENCE DATE OF YOUR CARD";
          document.querySelector("#multihint").style.color = "#f2b705";
        } else if (cvc != true && expiry != false) {
          document.querySelector("#multihint ").textContent =
            "PLEASE ENTER THE CVC OF YOUR CARD";
          document.querySelector("#multihint").style.color = "#f2b705";
        } else {
          document.querySelector("#multihint").style.color = "#262626";
        }
      }
    }

    // Posting data (basketList) to Heroku.
    // Sending newOrder to userOrder and resetBasket.
    async function post(data, firstName, orderList) {
      const newOrder = [];
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
          newOrder.push({ id: d.id, order: order, name: name });
        });

      // addToUserOrder in App.jsx
      addToUserOrder(newOrder);
      // ThankYouForOrdering in Cart.jsx
      ThankYouForOrdering();
      // resetBasket in App
      resetBasket(basketItems);
    }

    // reset form when form has been submittet in submitPayment() further up.
    function resetFrom() {
      form.email.value = "";
      form.number.value = "";
      form.name.value = "";
      form.expiry.value = "";
      form.cvc.value = "";
    }

    return (
      <div id="PaymentForm" hidden>
        <form id="form">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="form-group" id="cardnumber">
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
                  <span className="hint">
                    PLEASE ENTER YOUR CARD NUMBER CORRECTLY
                  </span>
                </div>
                <div className="form-group">
                  <div className="col">
                    <div className="row">
                      <div className="col-3 expiry" id="expiry">
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
                      </div>
                      <div className="col-3 cvc">
                        <label className=""> CVC </label>
                        <input
                          type="tel"
                          name="cvc"
                          className="form-control"
                          pattern="\d{3}"
                          required
                          onChange={this.handleInputChange}
                          onFocus={this.handleInputFocus}
                          id="cvc"
                        />
                      </div>
                    </div>
                    <span className="col hint" id="multihint">
                      PLEASE ENTER THE EXPERIENCE DATE AND CVC NUMBER OF YOUR
                      CARD
                    </span>
                  </div>
                </div>

                <div className="form-group" id="cardname">
                  <label className="">FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    id="name"
                  />
                  <span className="hint">
                    PLEASE ENTER YOUR FULL NAME. IT WILL ONLY BE USED TO SHOW
                    YOU YOUR ORDER
                  </span>
                </div>
                <div className="form-group" id="email">
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
                  <span className="hint">
                    PLEASE ENTER YOUR EMAIL. WE WILL ONLY USE YOUR EMAIL TO SEND
                    THE BILL
                  </span>
                </div>
              </div>
              <div className="row paybuttons">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="hideBasketBtn"
                    onClick={() => {
                      displayBasket();
                    }}
                  >
                    Basket
                  </button>
                </div>
                <div className="col">
                  <div className="form-actions">
                    <button // using default btn because of npm package
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        submitPayment();
                      }}
                    >
                      PAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col" id="visualcard">
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
