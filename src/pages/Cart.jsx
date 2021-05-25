import React from "react";
import CartItem from "../components/CartItem";
import Pay from "../components/Pay";
import Confirm from "../components/Confirm";
import Foobar from "../components/Foobar";


export default function Cart(props) {

    return(
       <section className="container">
           <Foobar/>
           <Formfill/>
          <CartItem basket={props.basket} amountList={props.amountList}/>
          <Pay />
          <Confirm/>
        
        </section>
    )
}

function Formfill(){
    return (
        <div>
            <h2>33,3%</h2>
        </div>
    );
}