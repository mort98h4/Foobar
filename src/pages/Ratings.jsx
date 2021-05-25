import React, {useState} from "react";
import BeerRating from "../components/BeerRating"; 
import { Link } from "@reach/router";
import updateUserOrder from "../App";

export default function Ratings(props) {
    console.log(props);
    console.log(props.order.order.length);
    // The original order

    // Remove identical beer names
    const newOrder = {
        id: props.order.id,
        order: []
    }

    props.order.order.forEach(item => {
        const firstIndex = props.order.order.indexOf(item);
        const inNewOrder = newOrder.order.findIndex(newOrderItem=> newOrderItem === item);
        if (inNewOrder === -1) {
            newOrder.order.push(props.order.order[firstIndex]);
        }
    })

    // The order we're going to use
    const rateOrder = {
        id: "",
        order: []
    }
    const Beer = {
        _id: "", beer_name: "", ratings: [], sum: "", nratings: ""
    }
    rateOrder._id = newOrder.id;

    rateOrder.order = newOrder.order.map(orderItem => {
        const beer = Object.create(Beer);
        beer.beer_name = orderItem;
        const beerIndex = props.ratings.findIndex(item=>item.beer_name === orderItem);
        beer._id = props.ratings[beerIndex]._id;
        beer.ratings = props.ratings[beerIndex].ratings;
        beer.sum = props.ratings[beerIndex].sum;
        beer.nratings = props.ratings[beerIndex].nratings;
        return beer;
    })

    // Update state when clicking a new rating
    const [beerRating, setBeerRating] = useState([]);
    function clickStarHandler(props) {
        console.log(props);
        const selectedRating = parseInt(event.target.dataset.rating);
        const dataId = event.target.dataset.id;

        document.querySelectorAll(`.star[data-id="${dataId}"]`).forEach(star => {
            const rating = parseInt(star.dataset.rating);
            if (rating <= selectedRating) {
                star.style.backgroundColor = "hotpink";
            } else {
                star.style.backgroundColor = "transparent";
            }
        })

        const inOrder = beerRating.findIndex(item=>item._id === props._id);
        console.log(inOrder);
        if (inOrder === -1) {
            const nextProps = {...props};
            nextProps.ratings = props.ratings.concat([selectedRating]);
            nextProps.sum += selectedRating;
            nextProps.nratings = nextProps.nratings + 1; 
            console.log(nextProps);
            setBeerRating(prevState => [...prevState, nextProps]);
        } else {
            const nextRating = beerRating.map(item=>{
                if (item._id === props._id) {
                    item.ratings = props.ratings.concat([selectedRating]);
                    item.sum = props.sum + selectedRating; 
                } 
                return item;
            });
            setBeerRating(nextRating);
        }
    }

    function clickSubmitHandler() {
        console.log("You clicked submit");
        beerRating.forEach(item=>{
            const status = putRatings(item);
            console.log(status)
        })
        document.querySelector("#rateBeers").setAttribute("hidden", true);
        document.querySelector("#rateMessage").removeAttribute("hidden");
    }

    const beerRatingComponent = rateOrder.order.map((item) => <BeerRating key={item._id} {...item} clickStarHandler={clickStarHandler}/>)

    return(
        <div className="container">
            <div className="row">
                <h1>Ratings</h1>
            </div>
            {props.order.order.length === 0 ? 
            <div className="row justify-content-center">
                <div className="col-10">
                    <h2>Sorry, there are no order to rate.</h2>
                    <p>Please go to the beers menu to order.</p>
                </div>
            </div>
            :
            <div id="rateBeers" className="row justify-content-center">
                <div className="col-10">
                    <h2>Order {rateOrder.id}</h2>
                    {beerRatingComponent}
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button id="submitRatings" className="btn btn-primary" disabled={beerRating.length === 0} onClick={(e) => props.clickSubmitHandler(beerRating)}>Submit ratings</button>
                </div>
            </div>
            }
            <div id="rateMessage" hidden className="row justify-content-center">
                <div className="col-10">
                    <h3>Hey {props.order.name}!</h3>
                    <p>Thank you for rating our beers!</p>
                </div>
                <div className="col-10">
                    <p>Still thirsty?</p>
                    <p>Buy another round!</p>
                </div>
                <div className="col-12">
                    <Link className="btn btn-primary" to="../beers">Menu</Link>
                </div>
            </div>
        </div>
    )
}

async function putRatings(data) {
    const updateData = JSON.stringify(data);
    const jsonData = await fetch("https://foobar-a352.restdb.io/rest/beers/"+data._id, {
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "60a3d37fe3b6e02545edaa27",
            "cache-control": "no-cache"
        },
        body: updateData
    })
    return jsonData.status;
}