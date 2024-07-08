import React from 'react'
import './review.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import generateStars from '../../UI/GenerateStars';
import reviews from '../../../Helpers/Review';
import { SiTicktick } from "react-icons/si";

const Reviews = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 3,
        responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      };

return (
    <>

    

    <div className="review-title">OUR HAPPY CUSTOMERS</div>

    <div className="review-container">


    <Slider {...settings}>
                {reviews.map((value, index) => (
                    <div className="review-content">
                        <div className="review">
                            <div className="review-star">{generateStars(value.stars)}</div>
                            <div review-name-content>
                                <div className="review-name">{value.name}</div>
                                <div className="review-icon"><SiTicktick /></div>
                            </div>
                            <div className="review-description">
                                {value.review}
                            </div>
                        </div>
                    </div>
                ))}
      </Slider>
            </div>
    </>
  )
}

export default Reviews