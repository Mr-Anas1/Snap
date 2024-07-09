import React from 'react'
import { useState } from 'react'


const SidebarInput = () => {

    const[selectedCategory, setSelectedCategory] = useState(null)

    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
      console.log(selectedCategory)
    }
  return (
    <>
        <label className='sidebar-category-label'>
            <input type="radio" name='test' onClick={handleCategoryChange}/>
            <div className='checkmark'></div> All
            
          </label>
    </>
  )
}

export default SidebarInput