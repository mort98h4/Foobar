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
  const [ratings, setRatings] = useState([]);

  // Found on javascript.plainenglish.io START
  // - https://javascript.plainenglish.io/using-reacts-useeffect-hook-to-fetch-data-and-periodically-refresh-that-data-2a69b6d44081
  const getData = () => {
    fetch("https://foobarsiwmorten.herokuapp.com")
      .then((res) => res.json())
      .then(setData);
  }
  const getProducts = () => {
    fetch("https://foobarsiwmorten.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then(setProducts);
  }
  // const getRatings = () => {
  //   fetch("https://foobar-a352.restdb.io/rest/beers", {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       "x-apikey": "60a3d37fe3b6e02545edaa27",
  //       "cache-control": "no-cache"
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then(setRatings);
  // }

  useEffect(() => {
    getData();
    getProducts();
    // getRatings();
    
    const interval = setInterval(() => {
      getData()
    }, 2000)
    return () => clearInterval(interval);
  }, []);
  // Found on javascript.plainenglish.io END

  // useEffect(() => {
  //   fetch("https://foobarsiwmorten.herokuapp.com/beertypes")
  //     .then((res) => res.json())
  //     .then(setProducts);
  // }, []);

  // useEffect(() => {
  //   fetch("https://foobar-a352.restdb.io/rest/beers", {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       "x-apikey": "60a3d37fe3b6e02545edaa27",
  //       "cache-control": "no-cache"
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then(setRatings);
  // }, []);

  const productsCopy = [...products];
  // console.log(productsCopy);
  console.log(data);
  // console.log(ratings);

  return (
    <div className="App">
      <Nav></Nav>
      {data.length === 0 ? <Loader/> : 
      <Router>
        <Dashboard path="/" data={data} ratings={ratings}/>
        <Beers path="beers" products={productsCopy} ratings={ratings}/>
        <Cart path="cart" />
        <Ratings path="ratings" ratings={ratings}/>
      </Router>}
      
    </div>
  )
}

export default App

function Loader() {
  return(
    <p>Loading...</p>
  )
}