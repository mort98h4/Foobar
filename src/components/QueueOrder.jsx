import React from "react";

export default function QueueOrder(props) {
    return (
        <div className="queueOrder row justify-content-between">
            <div className="col">
                <p>Morten</p>
            </div>
            <div className="col text-end">
                <p>No. </p>
                <span>{props.id}</span>
            </div>
        </div>
    )
}