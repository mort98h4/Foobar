import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import { Router, Link } from "@reach/router"

function App() {
  let Home = () => <div><h1>FooBar</h1>
  <h2>3. semester eksamen</h2></div>
  let Dash = () => <div>Dash</div>

  return (
    <div className="App">
      <Nav></Nav>
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </div>
  )
}

export default App

function Nav() {
  return(
    <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="dashboard">Dashboard</Link>
    </nav>
  )
}