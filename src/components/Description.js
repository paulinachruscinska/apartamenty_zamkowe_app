import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../images/birthday.jpg';
import img2 from '../images/session1.jpg';
import img3 from '../images/session2.jpg';
import img4 from '../images/session3.jpg';
import img5 from '../images/session4.jpg';
import img6 from '../images/flowers_hands.jpg';
import img7 from '../images/flowers_bath.jpg';
import img8 from '../images/flowers_hands.jpg';
import img9 from '../images/AC9.jpeg';
const carousel =[
    {img: img1, alt: 'image-birthday'},
    {img: img2, alt: 'session'},
    {img: img3, alt: 'session'},
    {img: img4, alt: 'session'},
    {img: img5, alt: 'session'},
    {img: img6, alt: 'flowers'},
    {img: img7, alt: 'flowers'},
    {img: img8, alt: 'wine'},
]
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


export default function Decription(){
    return(
        <section className='description'>
            <div className='description--box ds1'/>
            <div className='description--box ds2'>
            <h2 className='description__h2'>Odkryj nasze wyjątkowe apartamenty</h2>
            <p className='description__text'>Apartamenty, które oferujemy charakteryzują się nadzwyczajnym komfortem
                oraz nieprzeciętnym wnętrzem. Są idealnym miejscem na romantyczne wieczory, noce poślubne, pauzę w podróży czy sesje
                fotograficzne. Z pewnością urlop w naszych apartamentach zagwarantuje miłe wspomnienia ze wspólnego wypoczynku.</p>
            <div className='description--background'/>
            </div>
        </section>
    )
}

//Apartamenty zamkowe znajdują się w samym centrum Kwidzyna.
//                 Są idealnym miejscem na romantyczne wieczory, noce poślubne, pauzę w podróży czy sesje
//                 fotograficzne. W każdej opcji zakwaterowania znajduje się kuchnia z pełnym wyposażeniem,
//                 w tym lodówką, jak również część wypoczynkowa z sofą, telewizor z płaskim ekranem,
//                 pralka oraz prywatna łazienka z prysznicem i suszarką do włosów.
//                 Wyposażenie obejmuje także piekarnik, płytę kuchenną i czajnik.