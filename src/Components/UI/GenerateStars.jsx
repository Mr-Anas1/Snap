import { RiStarSFill } from "react-icons/ri";


const generateStars = (noStars) => {
    const stars = [];
    
    for(let i=0;i<noStars;i++){
      stars.push(<RiStarSFill  className='rating-star'/>)
    }

    return stars
  }

export default generateStars;