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
      message = <p className="navbar-text">YOUR ORDER IS BEING SERVED</p>;
    } else {
      message = (
        <p className="navbar-text">
          YOUR ORDER HAS JUST BEEN SERVED WE HOPE YOU WILL ENJOY YOUR BEER!
        </p>
      );
    }
  } else {
    message = <p className="navbar-text">You have no active orders</p>;
  }
  return (
    <div>
      <div hidden id="confirmPayment">
        <h2>HEY {newOrder.name}</h2>;
        <p>
          THANK YOU FOR ORDERING, YOU CAN FOLLOW YOUR ORDER ON THE DASHBOARD
        </p>
        <p>{message}</p>
        <p>
          YOUR ORDERNUMBER IS: <span>{newOrder.id}</span>
        </p>
        <Link className="btn btn-primary" to="../">
          Menu
        </Link>
        <p>
          CLICK ON THE STAR IN THE MENU WHEN YOU ARE READY TO RATE THE BEERS YOU
          HAVE BOUGHT
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
