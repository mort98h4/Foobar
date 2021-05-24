import React from "react";

export default function CartItem({basket}){
  
    return (
        <section className="">
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

    function clickedPlus(evt) {
        console.log("minus has been clicked"); 
          return props.amount + 1;
      }
      
      function clickedMinus(evt) {
        return props.amount - 1;
      }
    return (

      <li className="row">
        <img src="" alt="" className="col"/>
        <h2 className="col">{props.name}</h2>
        <div className="col">
        <button className="btn btn-primary" disabled={props.amount === 0} onClick={clickedMinus}>-</button>
        {props.amount} 
        <button className="btn btn-primary" onClick={clickedPlus}>+</button>
        </div>
        <p className="col"><span>Stk.{props.price}</span></p>
        <button className="btn btn-primary col">x</button>
      </li>
    );
  }

