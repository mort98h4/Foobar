import React from "react";

export default function Bartender(props) {
    console.log(props);
    return (
        <div className="col-4">
            <img src="" alt=""></img>
            <p>{props.name}</p>
        </div>
    )
}