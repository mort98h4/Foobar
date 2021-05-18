import React, {useState} from "react";
import QueueComponent from "../components/QueueComponent";

export default function Dashboard(props) {
    // console.log(props.data.queue.map(item));
    const queue = props.data.queue;
    console.log(queue);
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