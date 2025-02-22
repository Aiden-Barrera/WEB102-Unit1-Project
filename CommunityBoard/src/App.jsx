import React from 'react'
import Card from './components/Card.jsx'
import './App.css'

const App = () => {

  return (
    <>
      <div className='App'>
        <h1>NJIT's Baseball Schedule</h1>
      </div>
      <div className='card-flex'>
        <Card img='SH.png' title="NJIT @ Sam Houston" location="Huntsville, TX" date="Feb 23 (Sun)"/>
        <Card img='NJIT.svg' title="Iona @ NJIT" location=" Little Falls, NJ / Yogi Berra Stadium" date="Feb 28 (Fri)" />
      </div>
    </>
  )
}

export default App
