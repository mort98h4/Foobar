import React from "react";
import LazyLoad from 'react-lazyload';
import cleanImageName from "../helpers/cleanImageName.js";

export default function MostPopularNowBeer(props) {
    const index = props.topThree.findIndex(item=>item.name === props.name);
    const imagePath = cleanImageName(props.name);
    console.log(imagePath);
    return(
        <div className="col-4">
            <div className="row">
                <div className="col-12 d-flex justiy-content-center">
                    <LazyLoad height={200} once={true} offset={100}>
                        <img src={imagePath} alt="" width="100%"></img>
                    </LazyLoad>
                </div>
                <div className="col-12 text-center">
                    <p><span>#{index+1} </span>{props.name}</p>
                </div>
            </div>
        </div>
    )
}