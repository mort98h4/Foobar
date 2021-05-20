import React from "react";
import { Link } from "@reach/router"

export default function Nav() {
    return(
        <div className="container">
        <nav className="row">
            <div className="col">
            <Link  to="/">Dashboard</Link> |{" "}
            <Link  to="beers">Beers </Link> | {" "}
            </div>
            <span className="col">Hardcodet you are number <span>"something"</span> in the line</span> | {" "}
            <div className="col">
            <Link  to="cart">Cart</Link> <span>0</span> | {" "}
            <Link  to="ratings">Ratings</Link>
            </div>
        </nav>
        </div>
    )
}