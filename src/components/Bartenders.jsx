import React from "react";
import Bartender from "./Bartender";

export default function Bartenders(props) {
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
                <p>You have x hours left to order</p>
            </div>
        </div>
    )
}