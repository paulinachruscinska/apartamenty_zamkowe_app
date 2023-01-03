import img1 from '../images/AC14.jpg';
import img2 from '../images/AC5.jpg';
import img3 from '../images/AE5.jpg';
import img4 from '../images/AE6.jpg';
import {useEffect, useState} from "react";
const carousel = [img1, img2, img3, img4]

export default function Carousel(){
    const [currentSlide, setCurrentSlide]=useState(0)
    const length = carousel.length
    useEffect(()=>{
        setInterval(()=>nextSlide(), 3000)
    },[currentSlide])


    const nextSlide=()=>{
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }
    return(
    <section className='carousel'>
        {carousel.map((element, index)=>{
            return(
            <div className={(index === currentSlide ? 'slide-active' : 'slide') + ' carousel__item'} key={index}>
                {index === currentSlide && <img className='carousel__photo' src={element} alt='carousel-photo'/>}

            </div>
            )
        })}
    </section>
    )
}