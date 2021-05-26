import React from "react";

export default function CartItem({ basket, addToBasket }) {
  return (
    <section className="">
      <ul>
        {basket.map((item) => (
          <CartList
            name={item.name}
            amount={item.amount}
            key={item.name}
            addToBasket={addToBasket}
          />
        ))}
      </ul>
    </section>
  );
}

function CartList(props) {
  let price = props.amount * 45;
  /*  const [price, setPrice] = useState(45);

  function calcPrice() {
    setPrice((prevState) => {
      return prevState * props.amount;
    });
  } */

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
            //calcPrice();
            props.addToBasket(props, 1);
          }}
        >
          +
        </button>
      </div>
      <p className="col">
        PRICE <span>{price},-</span>
      </p>
      <button className="btn btn-primary col">x</button>
    </li>
  );
}
