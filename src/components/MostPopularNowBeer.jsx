import React from "react";
import LazyLoad from 'react-lazyload';
import cleanImageName from "../helpers/cleanImageName.js";

export default function MostPopularNowBeer(props) {
    const index = props.topThree.findIndex(item=>item.name === props.name);
    const imagePath = cleanImageName(props.name);
    const imageAlt = `Label of ${props.name}`;
    return(
        <div className="col-4">
            <div className="row justify-content-center">
                <div className="col-6">
                    <LazyLoad height={200} once={true} offset={100}>
                        <img src={imagePath} alt={imageAlt}></img>
                    </LazyLoad>
                </div>
                <div className="col-12 text-center">
                    <p><span>#{index+1} </span>{props.name}</p>
                </div>
            </div>
        </div>
    )
}