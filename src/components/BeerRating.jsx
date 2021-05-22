import React, {useState} from "react";

export default function BeerRating(props) {
    return(
        <div className="row">
            <div className="col-6">
                <h3>{props.beer_name}</h3>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <div className="star" data-id={props._id} data-rating="1" onClick={(e) => props.clickStarHandler(props)}></div>
                <div className="star" data-id={props._id} data-rating="2" onClick={(e) => props.clickStarHandler(props)}></div>
                <div className="star" data-id={props._id} data-rating="3" onClick={(e) => props.clickStarHandler(props)}></div>
                <div className="star" data-id={props._id} data-rating="4" onClick={(e) => props.clickStarHandler(props)}></div>
                <div className="star" data-id={props._id} data-rating="5" onClick={(e) => props.clickStarHandler(props)}></div>
            </div>
        </div>
    )
}