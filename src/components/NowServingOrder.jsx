import React from "react";

export default function NowServingOrder(props) {
    return(
        <div className="col d-flex justify-content-around text-center">
            <p>{props.id}</p>
        </div>
    )
}