import React, {useState} from "react";
import BeerRating from "../components/BeerRating"; 

export default function Ratings(props) {
    // The original order
    const order = {
        id: "123",
        order: [
            "Row 26",
            "Ruined Childhood",
            "Steampunk",
            "Steampunk"
        ]
    }

    // Remove identical beer names
    const newOrder = {
        id: order.id,
        order: []
    }

    order.order.forEach(item => {
        const firstIndex = order.order.indexOf(item);
        const inNewOrder = newOrder.order.findIndex(newOrderItem=> newOrderItem === item);
        if (inNewOrder === -1) {
            newOrder.order.push(order.order[firstIndex]);
        }
    })

    // The order we're going to use
    const rateOrder = {
        id: "",
        order: []
    }
    const Beer = {
        _id: "", beer_name: "", ratings: []
    }
    rateOrder.id = newOrder.id;

    rateOrder.order = newOrder.order.map(orderItem => {
        const beer = Object.create(Beer);
        beer.beer_name = orderItem;
        const beerIndex = props.ratings.findIndex(item=>item.beer_name === orderItem);
        beer._id = props.ratings[beerIndex]._id;
        beer.ratings = props.ratings[beerIndex].ratings;
        return beer;
    })

    // Update state when clicking a new rating
    const [beerRating, setBeerRating] = useState([]);
    function clickStarHandler(props) {
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

        const inOrder = beerRating.findIndex(item=>item.id === props.id);
        if (inOrder === -1) {
            const nextProps = {...props};
            nextProps.ratings = props.ratings.concat([selectedRating]);
            setBeerRating(prevState => [...prevState, nextProps]);
        } else {
            const nextRating = beerRating.map(item=>{
                if (item.id === props.id) {
                    item.ratings = props.ratings.concat([selectedRating]);
                } 
                return item;
            });
            setBeerRating(nextRating);
        }
    }

    function clickSubmitHandler() {
        console.log("You clicked submit");
        beerRating.forEach(item=>{
            putRatings(item);
        })
    }

    const beerRatingComponent = rateOrder.order.map((item) => <BeerRating key={item._id} id={item._id} name={item.beer_name} ratings={item.ratings} clickStarHandler={clickStarHandler}/>)

    return(
        <div className="container">
            <div className="row">
                <h1>Ratings</h1>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Order {rateOrder.id}</h2>
                    {beerRatingComponent}
                </div>
            </div>
            <div className="row justify-content-center">
                <button id="submitRatings" className="btn btn-primary" onClick={clickSubmitHandler}>Submit ratings</button>
            </div>
        </div>
    )
}

async function putRatings(data) {
    const updateData = JSON.stringify(data);
    const jsonData = await fetch("https://foobar-a352.restdb.io/rest/beers/"+data.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "60a3d37fe3b6e02545edaa27",
            "cache-control": "no-cache"
        },
        body: updateData
    })
    console.log(jsonData);
}