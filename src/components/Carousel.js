import {useEffect, useState} from "react";


export default function Carousel({carousel}){
    const [currentSlide, setCurrentSlide]=useState(0)
    const length = carousel.length
    useEffect(()=>{
        setTimeout(()=>nextSlide(), 3000)
    },[currentSlide])


    const nextSlide=()=>{
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }
    return(
    <section className='carousel'>
        {carousel.map((element, index)=>{
            return(
            <div className={(index === currentSlide ? 'slide-active' : 'slide') + ' carousel__item'} key={index}>
                {index === currentSlide && <img className='carousel__photo' src={element.image} alt={element.alt}/>}

            </div>
            )
        })}
    </section>
    )
}