import React from "react";

export default function MostPopularNowBeer(props) {
    const index = props.topThree.findIndex(item=>item.name === props.name);
    return(
        <div className="col-4">
            <div className="row">
                <div className="col-12 d-flex justiy-content-center">
                    <img src="" alt=""></img>
                </div>
                <div className="col-12 text-center">
                    <p><span>#{index+1} </span>{props.name}</p>
                </div>
            </div>
        </div>
    )
}