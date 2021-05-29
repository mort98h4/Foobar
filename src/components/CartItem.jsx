import React from "react";
import { Link } from "@reach/router";

export default function CartItem({ basket, addToBasket, removeFromBasket }) {
  const basketLength = basket.length;

  return (
    <section id="cartItems">
      <div id="noItemsInBasket">{basketLength === 0 && <NoOrders />}</div>
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
    </section>
  );
}

function CartList(props) {
  let price = props.amount * 49;

  return (
    <li className="row">
      <img src="" alt="" className="col" />
      <h2 className="col">{props.name}</h2>
      <div className="col">
        <button
          className="btn btn-primary"
          disabled={props.amount === 1}
          onClick={() => props.addToBasket(props, -1)}
        >
          -
        </button>
        {props.amount}
        <button
          className="btn btn-primary"
          onClick={() => {
            props.addToBasket(props, 1);
          }}
        >
          +
        </button>
      </div>
      <p className="col">
        PRICE <span>{price},-</span>
      </p>
      <button
        className="btn btn-primary col"
        onClick={() => {
          props.removeFromBasket(props);
        }}
      >
        x
      </button>
    </li>
  );
}

function NoOrders() {
  return (
    <div>
      <h2>Hello</h2>
      <p>You have no beers in your basket</p>
      <p>Please go to the product List to add the beers you want to order</p>
      <Link to="../beers"> View beers</Link>
    </div>
  );
}
