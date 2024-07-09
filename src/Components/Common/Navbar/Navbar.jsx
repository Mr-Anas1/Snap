import React from 'react'
import { useState } from 'react';
import './navbar.css'
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import {forYou} from '../../../Helpers/Dress'

const Navbar = () => {

  const[query, setQuery] = useState("");

  const[menu, setMenu] = useState(false);
  const[searchShow, setSearchShow] = useState(false)


  const filteredItems = forYou.filter((dress) => (
    dress.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  ))

  const handleMenu = (e) => {
    setMenu(!menu);
  }

  const handleSearchClick = (e) => {
    setSearchShow(!searchShow);
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    
  }


  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className='navbar-main flex'>
            { menu ? <RiCloseLargeFill className='close-icon icon' onClick={handleMenu} /> :
              <GiHamburgerMenu className='menu-icon icon' onClick={handleMenu}/> 
            }
            <div className="navbar-logo">SNAP.CO</div>
          </div>

          <div className={menu? "navbar-links flex show display": "navbar-links flex "}>
            <li>Shop </li>
            <li>On Sale</li>
            <li>New Arrival</li>
            <li>Brands</li>
          </div>

          
          

          <div className="navbar-cart flex">
            <IoSearch className='mobile-search-icon icon'  onClick={handleSearchClick} />
            <MdOutlineShoppingCart className='icon'/>
          </div>

          <div className={searchShow? "navbar-search navbar-search-show": "navbar-search"}>
            
            
            <IoSearch className='search-icon icon' />
            <input type="text" className = "search-input" placeholder='Search for products...' onChange={handleInputChange} />
            <RiCloseLargeFill className='search-icon icon' onClick={handleSearchClick} />
          </div>

          
        </div>
        
        
      </div>
    </>
  )
}

export default Navbar