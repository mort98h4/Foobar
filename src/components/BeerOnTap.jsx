import React from "react";

export default function BeerOnTap(props) {
    return (
        <div className="beerOnTap row justify-content-between">
            <div className="col-6">
                <p>{props.name}</p>
                <span>{props.ratingAVG}</span>
            </div>
            <div className="col-6 text-end">
                <p className="price"><span>49</span>,-</p>
            </div>
        </div>
    )
}