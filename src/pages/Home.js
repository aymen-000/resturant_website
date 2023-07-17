import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
  function order(){console.log('ordered')}
  return (
    <div className='text1'>
      <div className='text'>
        <h1>Pedro's Pizzeria</h1>
        <h2>PIZZA TO ANY TASTE</h2>
        <div>
          <Link to="/menu">
            <button className='order_button' onClick={order}>ORDER</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
