import React from "react";
import { Link } from "@reach/router";

export default function Confirm(props) {
  const newOrder = { order: [] };
  const queue = props.queue;
  const userOrder = props.userOrder;
  const serving = props.serving;

  if (props.userOrder.length <= 1 || props.userOrder[0].order.length < 0) {
    const currentOrder = props.userOrder.map((entry) => {
      newOrder.id = entry.id;
      newOrder.name = entry.name;
    });
  }

  let message;
  if (userOrder.length > 0) {
    const queueIndex = queue.findIndex((item) => item.id === userOrder[0].id);
    const servingIndex = serving.findIndex(
      (item) => item.id === userOrder[0].id
    );
    if (queueIndex > -1) {
      message = <NumberInLine queueIndex={queueIndex}></NumberInLine>;
    } else if (servingIndex > -1) {
      message = <p className="navbar-text">Your order is being served!</p>;
    } else {
      message = (
        <p className="navbar-text">
          Your order has just been served. We hope you will enjoy your beer!
        </p>
      );
    }
  } else {
    message = <p className="navbar-text">You have no active orders</p>;
  }
  return (
    <div className="row justify-content-center text-center">
      <div hidden id="confirmPayment" className="col-12 col-md-10 pb-3">
        <h3><span>HEY {newOrder.name}!</span></h3>;
        <p>
          Thank you for ordering.
        </p>
        <p>You can follow your order on the dashboard.</p>
      </div>
      <div className="col-12 col-md-10 pb-3">
        {message}
        <p>
          Your ordernumber is: <span>{newOrder.id}</span>
        </p>
      </div>
      <div className="col-12 col-md-10 pb-4">
        <Link className="btn btn-primary" to="../">
          Menu
        </Link>
      </div>
      <div className="col-12 col-md-10 pb-3">
        <p>
          Click the star in the navigations menu, when you are ready to rate the beers you have tried.
        </p>
      </div>
    </div>
  );
}

function NumberInLine(props) {
  return (
    <div>
      <p className="navbar-text">
        You are <br className="d-md-none" />
        no. <span>{props.queueIndex + 1}</span> in line
      </p>
    </div>
  );
}
