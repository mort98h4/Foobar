import React from "react";
import NowServingOrder from "./NowServingOrder";

export default function NowServing(props) {
    const nowServingComponents = props.serving.map((item) => <NowServingOrder key={item.id} {...item}/>)
    return(
        <div className="row">
            <div className="col-12">
                <h2>Now serving</h2>
            </div>
            <div className="row">
                {nowServingComponents}
            </div>
        </div>
    )
}