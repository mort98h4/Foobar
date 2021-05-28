import React, {useState} from "react";
import BeerRating from "../components/BeerRating"; 
import { Link } from "@reach/router";

export default function Ratings(props) {
    // Remove identical beer names
    const newOrder = {
        id: props.order.id,
        order: [],
        name: props.order.name
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
        id: newOrder.id,
        order: [],
        name: newOrder.name
    }
    const Beer = {
        _id: "", beer_name: "", ratings: [], sum: "", nratings: ""
    }

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
        console.log(event.target.dataset.rating);
        const selectedRating = parseInt(event.target.dataset.rating);
        const dataId = event.target.dataset.id;
        console.log(selectedRating, dataId)

        document.querySelectorAll(`.star[data-id="${dataId}"]`).forEach(star => {
            const rating = parseInt(star.dataset.rating);
            if (rating <= selectedRating) {
                star.style.fill = "#f2b705";
            } else {
                star.style.fill = "transparent";
            }
        })

        const inOrder = beerRating.findIndex(item=>item._id === props._id);
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

    const beerRatingComponent = rateOrder.order.map((item) => <BeerRating key={item._id} {...item} clickStarHandler={clickStarHandler}/>)

    return(
        <div className="container pb-5">
            <div className="row">
                <h1>Ratings</h1>
            </div>
            {props.order.order.length === 0 ? 
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="card">
                            <div className="card-body component">
                                <div className="row">
                                    <div className="col">
                                        <h2>Sorry, there is no order to rate.</h2>
                                        <p>Please go to the beers menu to order.</p>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col d-flex justify-content-center">
                                        <Link className="btn btn-primary" to="../beers">Menu</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div id="rateBeers" className="row justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="card">
                            <div className="card-body component">
                                <div className="row">
                                    <h2>Order {rateOrder.id}</h2>
                                </div>
                                {beerRatingComponent}
                                <div className="row mt-3 justify-content-center">
                                    <div className="col-12 d-flex justify-content-center">
                                        <button id="submitRatings" className="btn btn-primary" disabled={beerRating.length === 0} onClick={(e) => props.clickSubmitHandler(beerRating)}>Submit ratings</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            }
            <div id="rateMessage" hidden className="row justify-content-center text-center">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="card">
                            <div className="card-body component">
                                <div className="row">
                                    <div className="col">
                                        <h3><span>Hey {rateOrder.name}!</span></h3>
                                        <p>Thank you for rating our beers!</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <h4>Still thirsty?</h4>
                                        <p>Buy another round!</p>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col d-flex justify-content-center">
                                        <Link className="btn btn-primary" to="../beers">Menu</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}