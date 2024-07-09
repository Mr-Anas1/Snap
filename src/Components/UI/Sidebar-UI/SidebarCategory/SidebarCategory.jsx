import React from 'react'
import './sidebarCategory.css'
import { useState } from 'react'
import SidebarInput from '../Common/SidebarInput'


const SidebarCategory = () => {

 

  return (
    <>
      <div className="sidebar-category-container">

        <div className="sidebar-category-heading">Category</div>
        <div className="sidebar-category-option">
          

          <SidebarInput />
          <SidebarInput />
          <SidebarInput />
          <SidebarInput />

        </div>
      </div>
    </>
  )
}

export default SidebarCategory