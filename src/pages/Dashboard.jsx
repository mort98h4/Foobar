import React, {useState} from "react";
import QueueComponent from "../components/QueueComponent";

export default function Dashboard(props) {
    const queue = props.data.queue;
    console.log(props.ratings);
    const queueComponents = queue.map((item) => <QueueComponent key={item.id} {...item}/>)
    return(
        <div className="container">
            <div className="row">
                <h1>Dashboard</h1>                
            </div>
            <div className="row">
                <div className="col">
                    {queueComponents}
                </div>
            </div>
        </div>
    )
}