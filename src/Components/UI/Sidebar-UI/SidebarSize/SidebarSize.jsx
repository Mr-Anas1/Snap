import React from 'react'
import './sidebarSize.css'
import { useState } from 'react'

const SidebarSize = () => {

  const[selectedSize, setSelectedSize] = useState(null)

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  }

  return (
    <>
      <div className="sidebar-size-container">
        <div className="sidebar-size-title">Size</div>
        <div className="sidebar-size-buttons">
          <button className='sidebar-button' onClick={handleSizeChange}>SM</button>
          <button className='sidebar-button' onClick={handleSizeChange}>M</button>
          <button className='sidebar-button' onClick={handleSizeChange}>L</button>
          <button className='sidebar-button' onClick={handleSizeChange}>XL</button>
          <button className='sidebar-button' onClick={handleSizeChange}>XXL</button>
        </div>
      </div>
    </>
  )
}

export default SidebarSize