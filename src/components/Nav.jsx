import React from "react";
import { Link } from "@reach/router"

export default function Nav() {
    return(
        
        <nav className="navbar navbar-light bg-light bottom-0 start-0 position-fixed">
            <Link className="navbar-brand" to="/">Dashboard</Link> 
            <Link className="navbar-brand" to="beers">Beers </Link> 
            <h4 className="navbar-text">You are number <span>"Hardcodet"</span> in the line</h4> 
            <Link className="navbar-brand" to="cart">Cart<span>0</span></Link>  
            <Link className="navbar-brand" to="ratings">Ratings</Link>
         
        </nav>

    )
}