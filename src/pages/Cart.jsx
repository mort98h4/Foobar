import React from "react";
import CartItem from "../components/CartItem";
import Pay from "../components/Pay";
import Confirm from "../components/Confirm";

export default function Cart(props) {
  const emptyBasket = props.basket.length;
  //console.log(emptyBasket);

  function hideBasket() {
    document.querySelector("#basketItems").setAttribute("hidden", true);
    document.querySelector("#hideBasketBtn").setAttribute("hidden", true);
    displayForm();
  }

  function displayForm() {
    document.querySelector(".totalprice").setAttribute("hidden", true);
    document.querySelector("#PaymentForm").removeAttribute("hidden");
  }

  function displayBasket() {
    document.querySelector("#PaymentForm").setAttribute("hidden", true);
    document.querySelector("#basketItems").removeAttribute("hidden");
    document.querySelector("#hideBasketBtn").removeAttribute("hidden");
    document.querySelector(".totalprice").removeAttribute("hidden");
  }
  function ThankYouForOrdering() {
    //console.log("Thank You For Ordering");
    document.querySelector("#confirmPayment").removeAttribute("hidden");
    document.querySelector("#noItemsInBasket").setAttribute("hidden", true);
  }

  return (
    <section className="container pb-5-rem">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <article className="beerComponent row mb-3">
            <div className="card">
              <div className="card-body component">
                <Formfill />
                <CartItem
                  basket={props.basket}
                  addToBasket={props.addToBasket}
                  removeFromBasket={props.removeFromBasket}
                />
                <div className="row justify-content-center pb-3">
                  <div className="col d-flex justify-content-center">
                    {emptyBasket >= 1 && (
                      <button
                        className="btn btn-confirm"
                        id="hideBasketBtn"
                        onClick={() => {
                          hideBasket();
                        }}
                      >
                        Confirm
                      </button>
                    )}
                  </div>
                </div>

                {emptyBasket >= 1 && (
                  <Pay
                    basket={props.basket}
                    addToUserOrder={props.addToUserOrder}
                    resetBasket={props.resetBasket}
                    displayBasket={displayBasket}
                    ThankYouForOrdering={ThankYouForOrdering}
                  />
                )}

                <Confirm
                  userOrder={props.userOrder}
                  queue={props.queue}
                  serving={props.serving}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Formfill() {
  return (
    <div className="row justify-content-center">
      <div className="col d-flex justify-content-center">
        <h2>33,3%</h2>
      </div>
    </div>
  );
}
