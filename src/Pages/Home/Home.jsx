import React from 'react'
import './home.css'
import Navbar from '../../Components/Common/Navbar/Navbar'
import OfferBox from '../../Components/Common/OfferBox/OfferBox'
import Main from '../../Components/Common/Main/Main'
import Brands from '../../Components/Common/Brands/Brands'
import Product from '../../Components/Common/Products/Product'
import Reviews from '../../Components/Common/Reviews/Reviews'
import Footer from '../../Components/Common/Footer/Footer'
import { topSellingDress} from '../../Helpers/Dress'

const Home = () => {
  return (
    <div className='home-container'>
      <OfferBox />
      <Navbar />
      <Main />
      <Brands />
      <div className='home-product'>
        <Product dresses={topSellingDress}/>
      </div>
      
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home