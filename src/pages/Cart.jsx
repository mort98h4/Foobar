import React from "react";
import CartItem from "../components/CartItem";
import Pay from "../components/Pay";
import Confirm from "../components/Confirm";


export default function Cart(props) {

    return(
       <section className="basket">
          <CartItem basket={props.basket}/>
          <Pay/>
          <Confirm/>
        
        </section>
    )
}

