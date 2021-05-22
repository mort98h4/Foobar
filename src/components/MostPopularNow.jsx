import React, {useState} from "react";
import MostPopularNowBeer from "./MostPopularNowBeer";

export default function MostPopularNow(props) {
    // console.log(props);

    const Beer = {name: "", popularity: 0, id: 0}
    const mostPopular = props.beers.map(item => {
        const beer = Object.create(Beer);
        beer.name = item.name;
        beer.popularity = 0;
        beer.id = 0;
        return beer;
    })
    const [beerPopularity, setBeerPopularity] = useState(mostPopular);

    const orders = props.orders.map(order => {
        const orderIndex = beerPopularity.findIndex(item=>item.id === order.id);
        if (orderIndex === -1) {
            const nextPopularity = beerPopularity.map(entry=> {
                const index = order.order.findIndex(item=>item === entry.name);
                if (entry.name === order.order[index]) {
                    entry.id = order.id;
                    entry.popularity += 1;
                } 
                return entry;
            })
            setBeerPopularity(nextPopularity);
        }
    })

    const beerPopularityCopy = beerPopularity;
    const sortedList = beerPopularityCopy.sort(compare);
    function compare(a,b) {
        if (a["popularity"] > b["popularity"]) {
            return -1;
        }
    }
    const topThree = sortedList.slice(0,3);
    const beerComponent = topThree.map((item) => <MostPopularNowBeer key={item.name} {...item} topThree={topThree}/>)

    return(
        <div className="row">
            <div className="col-12">
                <h2>Most popular now</h2>
            </div>
            <div className="row">
                {beerComponent}
            </div>
        </div>
    )
}