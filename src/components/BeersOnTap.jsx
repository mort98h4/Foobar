import React from "react";
import Ratings from "../pages/Ratings";
import BeerOnTap from "./BeerOnTap";

export default function BeersOnTap(props) {
    const beers = props.taps.map((beer) => {
        const onTap = props.ratings.findIndex(item=>item.beer_name === beer.beer);
        beer.ratingAVG = props.ratings[onTap].avg;
        return beer;
    })

    const beerOnTapComponent = beers.map((item) => <BeerOnTap key={item.id} {...item}/>)
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