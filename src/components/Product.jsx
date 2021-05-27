import React, { useState } from "react";
//import BeerRating from "./BeerRating";

export default function Product(props) {
  const [amount, setAmount] = useState(0);
  let onTap = false;

  function clickedPlus() {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }

  function clickedMinus() {
    setAmount((prevState) => {
      return prevState - 1;
    });
  }

  function resetAmount() {
    setAmount((prevState) => {
      return prevState * 0;
    });
  }

  props.data.taps.forEach((tap) => {
    const tapBeer = tap.beer;
    if (tapBeer === props.name) {
      onTap = true;
      return onTap;
    }
  });

  return (
    <article className="row pt-3">
      <div className="col-12 col-md-4">
        <img src="" alt=""></img>
      </div>
      <div className="col-12 col-md-8">
        <div className="row">
          <div className="col">
            <h2>{props.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>{props.category}</p>
          </div>
          <div className="col-3">
            <p>Alc: {props.alc}</p>
          </div>
          <div className="col-3">
            <p>Hardcodet rating of 4.5</p>
          </div>
          <div className="col-3 text-end">
            <p>Hardcodet price of 49,-</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>{props.description.overallImpression}</p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <button
              className="btn btn-primary"
              disabled={amount === 0}
              onClick={clickedMinus}
            >
              -
            </button>
            {amount}
            <button
              className="btn btn-primary"
              onClick={() => {
                clickedPlus();
              }}
              disabled={onTap === false}
            >
              +
            </button>
            <button
              onClick={() => {
                resetAmount();
                props.addToBasket(props, amount);
              }}
              disabled={amount === 0}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <button className="btn btn-primary w-100" type="button">
              View more
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
