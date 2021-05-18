import React, {useState} from "react";

export default function Product(props) {
    console.log(props);
    return (
        <article className="row pt-3">
            <div className="col-12 col-md-4">
                <img src="" alt=""></img>
            </div>
            <div className="col-12 col-md-8">
                <div className="row">
                    <div className="col">
                        <h2>{props.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <p>{props.category}</p>
                    </div>
                    <div className="col-3">
                        <p>Alc: {props.alc}</p>
                    </div>
                    <div className="col-3">
                        <p>Hardcodet rating of 4.5</p>
                    </div>
                    <div className="col-3 text-end">
                        <p>Hardcodet price of 49,-</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>{props.description.overallImpression}</p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <button className="btn btn-primary">-</button>
                        <span>0</span>
                        <button className="btn btn-primary">+</button>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </article>
    )
}