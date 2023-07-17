import React from 'react'
import { MenuList } from '../help/MenuList';
import MenuItem from '../component/MenuItem';
import "./menu.css"

function Menu() {
  return (
    <div className='menu'> 
      <h1>Our Menu</h1>
      <div className='menu_items'>
        {MenuList.map((item,key)=>{
            return <MenuItem name={item.name} price={item.price} image={item.image} key={key}/>
        })}
      </div>
    </div>
  )
}
export default Menu ;