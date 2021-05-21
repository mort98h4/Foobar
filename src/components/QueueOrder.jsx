import React from "react";

export default function QueueOrder(props) {
    return (
        <div className="row justify-content-between">
            <div className="col">
                <p>Morten</p>
            </div>
            <div className="col">
                <p>{props.id}</p>
            </div>
        </div>
    )
}