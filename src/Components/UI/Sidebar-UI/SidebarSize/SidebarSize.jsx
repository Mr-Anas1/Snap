import React from 'react'
import './sidebarSize.css'
import SidebarButton from '../Common/SidebarButton'

const SidebarSize = () => {

  

  return (
    <>
      <div className="sidebar-size-container">
        <div className="sidebar-size-title">Size</div>
        <div className="sidebar-size-buttons">
        
          <SidebarButton />
          <SidebarButton />
          <SidebarButton />
          <SidebarButton />
          <SidebarButton />

        </div>
      </div>
    </>
  )
}

export default SidebarSize