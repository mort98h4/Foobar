import React from "react";
import CartItem from "../components/CartItem";
import Pay from "../components/Pay";
import Confirm from "../components/Confirm";
import Foobar from "../components/Foobar";

export default function Cart(props) {
  const emptyBasket = props.basket.length;
  console.log(emptyBasket);

  function hideBasket() {
    document.querySelector("#basketItems").setAttribute("hidden", true);
    document.querySelector("#hideBasketBtn").setAttribute("hidden", true);
    displayForm();
  }

  function displayForm() {
    document.querySelector("#PaymentForm").removeAttribute("hidden");
  }

  function displayBasket() {
    document.querySelector("#PaymentForm").setAttribute("hidden", true);
    document.querySelector("#basketItems").removeAttribute("hidden");
    document.querySelector("#hideBasketBtn").removeAttribute("hidden");
  }
  function ThankYouForOrdering() {
    console.log("Thank You For Ordering");
    document.querySelector("#confirmPayment").removeAttribute("hidden");
    document.querySelector("#noItemsInBasket").setAttribute("hidden", true);
  }

  return (
    <section className="container pb-5-rem">
      <Foobar />
      <Formfill />
      <CartItem
        basket={props.basket}
        addToBasket={props.addToBasket}
        removeFromBasket={props.removeFromBasket}
      />
      {emptyBasket >= 1 && (
        <button
          className="btn btn-primary"
          id="hideBasketBtn"
          onClick={() => {
            hideBasket();
          }}
        >
          Confirm
        </button>
      )}

      {emptyBasket >= 1 && (
        <Pay
          basket={props.basket}
          addToUserOrder={props.addToUserOrder}
          resetBasket={props.resetBasket}
          displayBasket={displayBasket}
          ThankYouForOrdering={ThankYouForOrdering}
        />
      )}

      <Confirm />
    </section>
  );
}

function Formfill() {
  return (
    <div>
      <h2>33,3%</h2>
    </div>
  );
}
