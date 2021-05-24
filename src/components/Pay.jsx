import React from "react";

export default function Pay() {
    let pay = false; 


    function clickPay(){
        pay = true; 
  
    }

    return (
        <form className="row">
            <label className="">
                Email
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1"></input>
              
                <span>WE WILL ONLY USE YOUR EMAIL TO SEND YOUR PAYMENTINFORMATIONS </span>
            </label>
            <label className="">
                Full Name 
                <input type="text" name="name" className="form-control" id="exampleFormControlInput1"></input>
            </label>
            <button className="btn btn-primary">Change order</button>
            <button onClick={clickPay} className="btn btn-primary">Pay</button>
        </form>
        ); 
}
