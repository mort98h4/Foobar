import React from "react";
import { Link } from "@reach/router";

export default function Confirm() {
  return (
    <div>
      <div hidden id="confirmPayment">
        <h2>HEY name</h2>;
        <p>
          THANK YOU FOR ORDERING, YOU CAN FOLLOW YOUR ORDER ON THE DASHBOARD
        </p>
        <p>
          YOU ARE NUMBER<span> number </span>IN LINE
        </p>
        <p>
          YOUR ORDERNUMBER IS: <span>number</span>
        </p>
        <Link to="../beers"></Link>
        <p>
          CLICK ON THE STAR IN THE MENU WHEN YOU ARE READY TO RATE THE BEERS YOU
          HAVE BOUGHT
        </p>
      </div>
    </div>
  );
}
