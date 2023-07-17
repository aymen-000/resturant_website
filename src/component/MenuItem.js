import React from 'react'
import "./menuitem.css"
function MenuItem({name,image,price}) {
  return (
    <div className='menuitem'>
        <div className='img'><img src={image} width="250px" height="250px" className='image'/></div>
        <h2 className="item_name">{name}</h2>
        <p className="item_price">${price}</p>
    </div>
  )
}

export default MenuItem
