import React from "react";

export default function CartItem({amountList}){

    return (
        <section className="">
        <ul>
          {amountList.map((item) => (
            <CartList
              name={item.name}
              amount={item.amount}
              key={item.name}
              addToAmountList={item.addToAmountList}
            />
          ))}

        </ul>
      </section>
 
    );
}

function CartList(props) {
    return (
     
      <li className="row">
        <img src="" alt="" className="col"/>
        <h2 className="col">{props.name}</h2>
        <div className="col">
        <button className="btn btn-primary" disabled={props.amount === 0} >-</button>
        {props.amount} 
        <button className="btn btn-primary" onClick={() => props.addToAmountList(props)}>+</button>
        </div>
        <p className="col"><span>Stk.{props.price}</span></p>
        <button className="btn btn-primary col">x</button>
      </li>
    );
  }