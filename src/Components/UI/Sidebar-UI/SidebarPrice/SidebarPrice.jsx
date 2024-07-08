import React from 'react'
import './sidebarPrice.css'
import { useState } from 'react'

const SidebarPrice = () => {

  const[selectedPrice, setSelectedPrice] = useState(null)

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  }
  return (
    <>
      <div className="sidebar-price-container">

        <div className="sidebar-price-heading">Price</div>
        <div className="sidebar-price-option">
          <label className='sidebar-price-label'>
            <input type="radio" name='test2' onClick={handlePriceChange}/>
            <div className='checkmark-price'></div> $0 - $49
          </label>

          <label className='sidebar-price-label'>
            <input type="radio" name='test2' onClick={handlePriceChange}/>
            <div className='checkmark-price'></div> $50 - $99
          </label>

          <label className='sidebar-price-label'>
            <input type="radio" name='test2' onClick={handlePriceChange}/>
            <div className='checkmark-price'></div> $100 - $149
          </label>

          <label className='sidebar-price-label'>
            <input type="radio" name='test2' onClick={handlePriceChange}/>
            <div className='checkmark-price'></div> $150+
          </label>
        </div>
      </div>
    </>  )
}

export default SidebarPrice