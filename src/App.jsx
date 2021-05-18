import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import { Router } from "@reach/router"

import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Beers from "./pages/Beers";
import Cart from "./pages/Cart";
import Ratings from "./pages/Ratings";

function App() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  // Found on javascript.plainenglish.io START
  // - https://javascript.plainenglish.io/using-reacts-useeffect-hook-to-fetch-data-and-periodically-refresh-that-data-2a69b6d44081
  const getData = () => {
    fetch("https://foobarsiwmorten.herokuapp.com")
      .then((res) => res.json())
      .then(setData);
  }

  useEffect(() => {
    getData();
    
    const interval = setInterval(() => {
      getData()
    }, 2000)
    return () => clearInterval(interval);
  }, []);
  // Found on javascript.plainenglish.io END

  useEffect(() => {
    fetch("https://foobarsiwmorten.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const productsCopy = [...products];
  // console.log(productsCopy);
  //console.log(data);

  return (
    <div className="App">
      <Nav></Nav>
      <Router>
        <Dashboard path="/" data={data}/>
        <Beers path="beers" products={productsCopy}/>
        <Cart path="cart" />
        <Ratings path="ratings" />
      </Router>
    </div>
  )
}

export default App