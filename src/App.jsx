import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Beers from "./pages/Beers";
import Cart from "./pages/Cart";
import Ratings from "./pages/Ratings";
import putRatings from "./helpers/putRatings.js";

function App() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [basket, setBasket] = useState([]);
  const [userOrder, setUserOrder] = useState([{id: 0, order: [], name: ""}]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Found on javascript.plainenglish.io START
  // - https://javascript.plainenglish.io/using-reacts-useeffect-hook-to-fetch-data-and-periodically-refresh-that-data-2a69b6d44081
  const getData = () => {
    fetch("https://foobarsiwmorten.herokuapp.com")
      .then((res) => res.json())
      .then(setData);
  };
  const getProducts = () => {
    fetch("https://foobarsiwmorten.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then(setProducts);
  };
  const getRatings = () => {
    fetch("https://foobar-a352.restdb.io/rest/beers", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "60a3d37fe3b6e02545edaa27",
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then(setRatings);
  };

  useEffect(() => {
    getData();
    getProducts();
    getRatings();

    const interval = setInterval(() => {
      getData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  // Found on javascript.plainenglish.io END

  function addToUserOrder(props) {
    setUserOrder(props);
  }

  function addToBasket(payload, amount) {
    const inBasket = basket.findIndex((item) => item.name === payload.name);
    if (inBasket === -1) {
      //add
      const nextPayload = { ...payload };
      nextPayload.amount = amount;
      setBasket((prevState) => [...prevState, nextPayload]);
      setTotalAmount(totalAmount + amount);
    } else {
      //if it exists, modify amount
      const nextBasket = basket.map((item) => {
        if (item.name === payload.name) {
          item.amount += amount;
        }
        return item;
      });
      setBasket(nextBasket);
      setTotalAmount(totalAmount + amount);
    }
    if (totalAmount >= 20) {
      setTotalAmount(`20+`);
    } else {
      setTotalAmount(totalAmount + amount);
    }
  }

  function clickSubmitHandler(props) {
    props.forEach((item) => {
      const status = putRatings(item);
      console.log(status);
    });
    document.querySelector("#rateBeers").setAttribute("hidden", true);
    document.querySelector("#rateMessage").removeAttribute("hidden");
    setUserOrder([{order: [], name: props[0].customer, id: props[0].orderId}]);
    getRatings();
  }

  function removeFromBasket(props) {
    console.log(props);
  }

  const productsCopy = [...products];
  // console.log(productsCopy);
  //console.log(data);
  // console.log(ratings);

  return (
    <div className="App">
      {data.length === 0 || ratings.length === 0 ? (
        <Loader />
      ) : (
        <div>
          <Nav totalAmount={totalAmount} queue={data.queue} serving={data.serving} userOrder={userOrder}/>
          <header className="row text-center pt-3">
            <h1>{data.bar.name}</h1>
          </header>
          <Router>
            <Dashboard path="/" data={data} ratings={ratings} userOrder={userOrder}/>
            <Beers
              path="beers"
              data={data}
              products={productsCopy}
              ratings={ratings}
              addToBasket={addToBasket}
            />
            <Cart
              path="cart"
              basket={basket}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
              addToUserOrder={addToUserOrder}
            />
            <Ratings
              path="ratings"
              order={userOrder}
              data={data}
              ratings={ratings}
              clickSubmitHandler={clickSubmitHandler}
            />
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

function Loader() {
  return <p>Loading...</p>;
}
