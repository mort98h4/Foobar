import React from "react";
import CartItem from "../components/CartItem";
import Pay from "../components/Pay";
import Confirm from "../components/Confirm";


export default function Cart(props) {

    return(
       <section className="container">
          <CartItem basket={props.basket} amountList={props.amountList}/>
          <Pay />
          <Confirm/>
        
        </section>
    )
}