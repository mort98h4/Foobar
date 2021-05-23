import React from "react";

export default function CartItem({basket}){
  
    return (
        <section className="MyBasket">
        <ul>
          {basket.map((item) => (
            <CartList
              name={item.name}
              amount={item.amount}
              key={item.name}
            />
          ))}

        </ul>
      </section>
 
    );
}

function CartList(props) {
    return (

      <li>
        {props.amount} {props.name}
      </li>
    );
  }

