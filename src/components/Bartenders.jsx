import React from "react";
import Bartender from "./Bartender";
import getTimeLeftToOrder from "../helpers/getTimeLeftToOrder.js";

export default function Bartenders(props) {
    const leftToOrder = getTimeLeftToOrder(props.bar.closingTime); 
    const bartenderComponent = props.bartenders.map((item) => <Bartender key={item.name} {...item}/>)
    return (
        <div className="row mb-3">
            <div className="card">
                <div className="card-body component">
                    <div className="row">
                        <h2>Bartenders</h2>
                    </div>
                    <div className="row justify-content-around text-center">
                        {bartenderComponent}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <address>
                                <p>{props.bar.name}</p>
                                <p>Lygten 12, 2400 KBH NV</p>
                                <p>Closing at {props.bar.closingTime}</p>
                            </address>
                            <p>{leftToOrder}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}