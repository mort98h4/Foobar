import React, {useState} from "react";
import Product from "../components/Product";

export default function Beers(props) {
    // console.log(props);
    const productComponents = props.products.map((item) => <Product key={item.name} {...item} />)
    return(
        <main className="container">
            <header className="row">
                <h1>Beers</h1>
            </header>
            {productComponents}
        </main>
    )
}