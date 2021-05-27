import React, {useState} from "react";
import NowServing from "../components/NowServing";
import Queue from "../components/Queue";
import Bartenders from "../components/Bartenders";
import BeersOnTap from "../components/BeersOnTap";
import MostPopularNow from "../components/MostPopularNow";

export default function Dashboard(props) {
    // console.log(props);
    
    return(
        <div className="container">
            <div className="row">
                <h1>Dashboard</h1>                
            </div>
            <div className="row gx-3">
                <div className="col-12 col-md-6">
                    <NowServing serving={props.data.serving}/>
                    <Queue queue={props.data.queue}/>
                    <Bartenders bartenders={props.data.bartenders} bar={props.data.bar}/>
                </div>
                <div className="col-12 col-md-6">
                    <BeersOnTap taps={props.data.taps} ratings={props.ratings}/>
                    <MostPopularNow orders={props.data.serving} beers={props.data.storage}/>
                </div>
            </div>
        </div>
    )
}