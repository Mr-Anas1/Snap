import React from 'react'
import { useState } from 'react'

const SidebarButton = () => {

    const[selectedSize, setSelectedSize] = useState(null)

    
    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
        console.log(selectedSize)
    }

  return (
    <>
        <label className='sidebar-category-label'>
            <input value="SM" type="radio" name='test' onChange={handleSizeChange}/>
            <button className='sidebar-button' onClick={handleSizeChange}>SM</button>
        </label>
    </>
  )
}

export default SidebarButton