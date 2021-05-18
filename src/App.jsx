import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import { Router } from "@reach/router"

import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Beers from "./pages/Beers";
import Cart from "./pages/Cart";
import Ratings from "./pages/Ratings";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Router>
        <Dashboard path="/" />
        <Beers path="beers" />
        <Cart path="cart" />
        <Ratings path="ratings" />
      </Router>
    </div>
  )
}

export default App