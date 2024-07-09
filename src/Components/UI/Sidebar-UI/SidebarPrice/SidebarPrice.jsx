import React from 'react'
import './sidebarPrice.css'
import SidebarInput from '../Common/SidebarInput'

const SidebarPrice = () => {

  
  return (
    <>
      <div className="sidebar-price-container">

        <div className="sidebar-price-heading">Price</div>
        <div className="sidebar-price-option">
          <SidebarInput />
          <SidebarInput />
          <SidebarInput />
          <SidebarInput />
        </div>
      </div>
    </>  )
}

export default SidebarPrice