import { useEffect, useState } from "react";
import classNames from 'classnames'


export default function Carousel({ carousel }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => setCurrentSlide(slide => slide + 1 < carousel.length ? slide + 1 : 0), 3000)

        return () => {
            clearInterval(interval)
        }
    }, [carousel.length])

    return (
        <div className='carousel'>
            <div className='carousel__item'>
                {carousel.map((element, index) => (
                        <img
                            className={classNames('carousel__photo', {
                                'slide-active': index === currentSlide
                            })
                            }
                            src={element.image}
                            alt={element.alt}
                        />
                    )
                )}
            </div>
        </div>
    )
}