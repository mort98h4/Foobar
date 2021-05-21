import React, {useState} from "react";
import QueueOrder from "./QueueOrder";

export default function Queue(props) {
    const queueComponents = props.queue.map((item => <QueueOrder key={item.id} {...item}/>))
    return(
        <div className="row">
            <div className="col-12">
                <h2>Order queue</h2>
            </div>
            <div className="col-12">
                {queueComponents}
            </div>
        </div>
    )
}