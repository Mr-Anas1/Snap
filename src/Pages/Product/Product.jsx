import React from 'react'
import './product.css'
import Navbar from '../../Components/Common/Navbar/Navbar'
import Product from '../../Components/Common/Products/Product'
import { forYou} from '../../Helpers/Dress'
import Sidebar from '../../Components/Common/Sidebar.jsx/Sidebar'



const Products = () => {
  return (
    <>

      <Navbar />
      <div className='sidebar'><Sidebar /></div>
      <div className="products-container">
        <Product dresses={forYou} />
      </div>
     
      
    </>
  )
}

export default Products