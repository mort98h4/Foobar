import React from "react";
import Cards from 'react-credit-cards';

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
  } from "./Form.jsx";

// https://www.npmjs.com/package/react-credit-cards
export default class PaymentForm extends React.Component {
    state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
   
    handleInputFocus = (e) => {
      this.setState({ focus: e.target.name });
    }
    
    handleInputChange = (e) => {
      const { name, value } = e.target;
      
      this.setState({ [name]: value });
    }

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
                <label className=""> Email     </label>
              <input
                type="email"
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
              <label className=""> Card Number    </label>
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
           
            
            </div>
            <div className="form-group">
                <label className=""> Cardholder Name     </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
          
            </div>
            <div className="row">
              <div className="col-6">
                  <label className="">Expiry Date  </label>
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
               
              </div>
              <div className="col-6">
                  <label className=""> CVC   </label>
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
             
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