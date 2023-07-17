import React, { useState } from 'react'
import logo from '../assets/pizzaLogo.png'
import './navbar_style.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import menu from '../assets/menu.png'

function Navbar() {
  const [appear , setApear] = useState(false)
  return (
    <div className='navbar'>
        <div className='leftside'>
            <div className='image' id={appear == true ? "case2" : "case1"}><img src={logo} width='90px' height='40px'/> </div>
            <div id={appear == true ? "case3" : "case4"}>
              <Link to='/' className="element">Home</Link>
              <Link to='/menu' className="element">Menu</Link>
              <Link to='/about' className="element">About Us</Link>
              <Link to='/contact' className="element">Contact</Link>
            </div>
            <div className='but' onClick={()=>{setApear(!appear)}} id="case5"><img className='nav' src={menu} width="40px" height="40px"></img> </div>
          </div>
        <div className='rightside'>
            <Link to='/' className="element">Home</Link>
            <Link to='/menu' className="element">Menu</Link>
            <Link to='/about' className="element">About Us</Link>
            <Link to='/contact' className="element">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar;
