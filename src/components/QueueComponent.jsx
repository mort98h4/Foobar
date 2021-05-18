import React, {useState} from "react";

export default function QueueComponent(props) {
    console.log(props);
    return(
        <p>{props.id}</p>
    )
}