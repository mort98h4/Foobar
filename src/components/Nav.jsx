import React from "react";
import { Link } from "@reach/router"

export default function Nav() {
    return(
        <nav>
            <Link to="/">Dashboard</Link> |{" "}
            <Link to="beers">Beers</Link> |{" "}
            <Link to="cart">Cart</Link> |{" "}
            <Link to="ratings">Ratings</Link>
        </nav>
    )
}