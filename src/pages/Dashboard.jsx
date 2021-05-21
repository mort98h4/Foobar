import React, {useState} from "react";
import Queue from "../components/Queue";

export default function Dashboard(props) {
    const queue = props.data.queue;
    // console.log(props);
    
    return(
        <div className="container">
            <div className="row">
                <h1>Dashboard</h1>                
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    /* This should be in a component */
                    <div className="row">
                        <div className="col">
                            <h2>Now serving</h2>
                        </div>
                        <div className="col">
                            <p>This will be the now serving section</p>
                        </div>
                    </div>
                    /* end */
                    <Queue queue={props.data.queue}/>
                    /* This should be in a component */
                    <div className="row">
                        <div className="col">
                            <p>This will be the bartenders section</p>
                        </div>
                    </div>
                    /* end */
                </div>
                <div className="col-12 col-md-6">
                    /* This should be in a component */
                    <div className="row">
                        <div className="col">
                            <p>This will be the beers on tap section</p>
                        </div>
                    </div>
                    /* end */
                    /* This will be the beers on tap section */
                    <div className="row">
                        <div className="col">
                            <p>This will be the most popular now section</p>
                        </div>
                    </div>
                    /* end */
                </div>
            </div>
        </div>
    )
}