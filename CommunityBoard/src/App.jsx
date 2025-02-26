import React from 'react'
import Card from './components/Card.jsx'
import './App.css'

const App = () => {

  return (
    <>
      <div className='title'>
        <h1>NJIT's Baseball Schedule</h1>
      </div>
      <div className='card-flex'>
        <Card img='SH.png' title="NJIT @ Sam Houston" location="Huntsville, TX" date="Feb 23 (Sun)"/>
        <Card img='NJIT.svg' title="Iona @ NJIT" location="Little Falls, NJ / Yogi Berra Stadium" date="Feb 28 (Fri)" />
        <Card img='NJIT.svg' title="Iona @ NJIT" location="Little Falls, NJ / Yogi Berra Stadium" date="Mar 1 (Sat)" />
        <Card img='NJIT.svg' title="Iona @ NJIT" location="Little Falls, NJ / Yogi Berra Stadium" date="Mar 2 (Sun)" />
        <Card img='NJIT.svg' title="Monmouth @ NJIT" location="Little Falls, NJ / Yogi Berra Stadium" date="Mar 5 (Wed)" />
        <Card img='StJohn.png' title="NJIT @ St. John's" location="Queens, NY" date="Mar 7 (Fri)" />
        <Card img='StJohn.png' title="NJIT @ St. John's" location="Queens, NY" date="Mar 8 (Sat)" />
        <Card img='StJohn.png' title="NJIT @ St. John's" location="Queens, NY" date="Mar 9 (Sun)" />
        <Card img="SHP.png" title="NJIT @ Seton Hall" location="South Orange, NJ" date="Mar 11 (Tue)" />
        <Card img="Villa.png" title="NJIT @ Villanova" location="Plymouth Meeting, PA" date="Mar 14 (Fri)" />
      </div>
    </>
  )
}

export default App
