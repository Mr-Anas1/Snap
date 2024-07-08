import React from 'react'
import './sidebarCategory.css'
import { useState } from 'react'


const SidebarCategory = () => {

  const[selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  return (
    <>
      <div className="sidebar-category-container">

        <div className="sidebar-category-heading">Category</div>
        <div className="sidebar-category-option">
          <label className='sidebar-category-label'>
            <input type="radio" name='test' onClick={handleCategoryChange}/>
            <div className='checkmark'></div> All
          </label>

          <label className='sidebar-category-label'>
            <input type="radio" name='test' onClick={handleCategoryChange}/>
            <div className='checkmark'></div> Casual
          </label>

          <label className='sidebar-category-label'>
            <input type="radio" name='test' onClick={handleCategoryChange}/>
            <div className='checkmark'></div> Party
          </label>

          <label className='sidebar-category-label'>
            <input type="radio" name='test' onClick={handleCategoryChange}/>{console.log(selectedCategory)}
            <div className='checkmark'></div> Gym
          </label>
        </div>
      </div>
    </>
  )
}

export default SidebarCategory