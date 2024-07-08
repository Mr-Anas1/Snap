import React from 'react'
import './main.css'
import features from '../../../Helpers/Features'

const Main = () => {
  return (
    <>
        <div className="main-container flex">
            <div className="main-left">
                <div className="main-title">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
                <div className='main-description-content'>
                    <div className="main-description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</div>
                </div>
                <button className='main-btn'>Shop now</button>
                <div className="features">
                    {features.map((value, index) => (

                        <div className='feature-box'>                            
                            <div className="feature-title">{value.title}</div>
                            <div className="feature-description">{value.description}</div>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    </>
  )
}

export default Main