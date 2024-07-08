import React from 'react'
import './brands.css'
import calvin from '../../../Assets/Images/calvin.png'
import gucci from '../../../Assets/Images/gucci.png'
import prada from '../../../Assets/Images/prada.png'
import zara from '../../../Assets/Images/zara.png'
import versace from '../../../Assets/Images/versace.png'


const Brands = () => {
  return (
    <>
        <div className="brands-container">
            <div className="brands">
                <img src={calvin} alt="calvin" className='brand-img'/>
                <img src={gucci} alt="gucci" className='brand-img' />
                <img src={prada} alt="prada" className='brand-img' />
                <img src={zara} alt="zara" className='brand-img' />
                <img src={versace} alt="versace" className='brand-img' />
            </div>
        </div>
    </>
  )
}

export default Brands