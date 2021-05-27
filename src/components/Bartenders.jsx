import React from "react";
import Bartender from "./Bartender";
import getTimeLeftToOrder from "../helpers/getTimeLeftToOrder.js";

export default function Bartenders(props) {
    const leftToOrder = getTimeLeftToOrder(props.bar.closingTime); 
    const bartenderComponent = props.bartenders.map((item) => <Bartender key={item.name} {...item}/>)
    return (
        <div className="row">
            <div className="col-12">
                <h2>Bartenders</h2>
            </div>
            <div className="col-12">
                <div className="row justify-content-around text-center">
                    {bartenderComponent}
                </div>
            </div>
            <div className="col-12">
                <address>
                    <p>{props.bar.name}</p>
                    <p>Lygten 12, 2400 KBH NV</p>
                    <p>Closing at {props.bar.closingTime}</p>
                </address>
                <p>{leftToOrder}</p>
            </div>
        </div>
    )
}