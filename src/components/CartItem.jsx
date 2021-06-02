import React from "react";
import { Link } from "@reach/router";
import LazyLoad from "react-lazyload";
import cleanImageName from "../helpers/cleanImageName.js";

export default function CartItem({ basket, addToBasket, removeFromBasket }) {
  const basketLength = basket.length;

  return (
    <section id="cartItems">
      <div id="noItemsInBasket">{basketLength === 0 && <NoOrders />}</div>
      <div>
        <ul id="basketItems">
          {basket.map((item) => (
            <CartList
              name={item.name}
              amount={item.amount}
              key={item.name}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
            />
          ))}
        </ul>
        {basketLength >= 1 && <TotalPriceInBasket basket={basket} />}
      </div>
    </section>
  );
}

function CartList(props) {
  let price = props.amount * 49;

  const imagePath = cleanImageName(props.name);
  const imageAlt = `Label of ${props.name}`;

  return (
    <li className="row basketitems">
      <div className="col row">
        <div className="col col-lg-2">
          <LazyLoad height={200} once={true} offset={100}>
            <img src={imagePath} alt={imageAlt}></img>
          </LazyLoad>
        </div>
        <h2 className="col">{props.name}</h2>
      </div>
      <div className="col row col-lg-3">
        <button
          className="col btn btn-primary btn-amount"
          disabled={props.amount === 1}
          onClick={() => props.addToBasket(props, -1)}
        >
          -
        </button>
        <div className="col amount d-flex align-items-center justify-content-center mx-4">
          <p className="mb-0">{props.amount}</p>
        </div>
        <button
          className="col btn btn-primary btn-amount"
          onClick={() => {
            props.addToBasket(props, 1);
          }}
        >
          +
        </button>
      </div>
      <div className="col-10 col-md-6 col-lg-5 col-xl-4 d-flex justify-content-center justify-content-md-end">
        <p className="col">
          PRICE <span>{price},-</span>
        </p>
        <div className="">
          <button
            className=" btn btn-primary btn-amount col"
            onClick={() => {
              props.removeFromBasket(props);
            }}
          >
            x
          </button>
        </div>
      </div>
    </li>
  );
}

function TotalPriceInBasket(props) {
  const orderList = [];
  props.basket.forEach((item) => {
    for (let i = 0; i < item.amount; i++) {
      orderList.push(item.name);
    }
  });

  const amountInBasket = orderList.length;
  const totalPrice = amountInBasket * 49;

  return (
    <div className="row justify-content-center totalprice">
      <div className="col d-flex justify-content-center">
        <h2>
          Total Price in basket <span>{totalPrice},-</span>
        </h2>
      </div>
    </div>
  );
}

function NoOrders() {
  return (
    <div>
      <h2>Hello</h2>
      <p>You have no beers in your basket</p>
      <p>Please go to the product List to add the beers you want to order</p>
      <Link className="btn btn-primary" to="../beers">
        Menu
      </Link>
    </div>
  );
}
