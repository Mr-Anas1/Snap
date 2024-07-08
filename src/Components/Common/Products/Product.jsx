import React from 'react'
import './product.css'
import generateStars from '../../UI/GenerateStars'

const Product = ({dresses}) => {


  return (

      <>

        
        <div className="product-container">
        {dresses.map((u, index)=>(<div className="product-title" key={u.id}>{u.heading}</div>))}

          <div className="product-box">
          {
            dresses.map((dress,index) => (
              <div className="product" key={dress.id}>
              

                <img src={dress.img} alt="img" className='product-img' />
                <div className="product-name">{dress.title}</div>
                <div className="product-rating">
                  <div className="product-rating-star">{generateStars(dress.rating)}</div>
                  <div className="product-rating-number">{dress.rating}/5</div>
                </div>
                <div className="product-cost">{dress.rate}</div>
              </div>
            ))
          }
            
          </div>
        </div>
      </>
  )
}

export default Product