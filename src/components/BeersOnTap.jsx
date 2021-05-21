import React from "react";
import BeerOnTap from "./BeerOnTap";

export default function BeersOnTap(props) {
    const beerOnTapComponent = props.taps.map((item) => <BeerOnTap key={item.id} {...item}/>)
    return (
        <div className="row">
            <div className="col-12">
                <h2>Beers on tap</h2>
            </div>
            <div className="col-12">
                {beerOnTapComponent}
            </div>
        </div>
    )
}