import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import { Router, Link } from "@reach/router"

function App() {
  let Home = () => <div className="App"><h1>FooBar</h1>
  <h2>3. semester eksamen</h2></div>
  let Dash = () => <div>Dash</div>

  return (
    <Router>
    <Home path="/" />
    <Dash path="dashboard" />
  </Router>
  )
}

export default App
