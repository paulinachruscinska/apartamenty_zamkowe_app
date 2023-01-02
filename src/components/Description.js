import img1 from '../images/AC14.jpg';
import img2 from '../images/AC5.jpg';
import img3 from '../images/AE5.jpg';
import img4 from '../images/AE6.jpg';
import bath from '../images/bath_bw.jpeg';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const carousel = [img1, img2, img3, img4]


export default function Decription(){
    return(
        <section className='description'>
            <div className='description__text'>
                <h2 className='description__header'>Odkryj nasze wyjątkowe apartamenty</h2>
                <p className='description__text--p'>Apartamenty, które oferujemy charakteryzują się nadzwyczajnym
                    komfortem oraz nieprzeciętnym wnętrzem.
                    Są idealnym miejscem na romantyczne wieczory, noce poślubne, pauzę w podróży czy sesje fotograficzne.</p>
                <p className='description__text--p'>W pełni wyposażony aneks kuchenny czy strefa wypoczynku sprawiają,
                    że nawet w podróży służbowej goście mogą
                    poczuć się jak w domu. Luksusowa łazienka czy nowoczesny wygląd sprawiają, że pobyt tu to prawdziwa przyjemność.</p>
                <p className='description__text--p'>Nasze apartamenty można wynająć na doby, dni, a także miesiące.
                    Stworzyliśmy apartamenty, które są
                    nie tylko funkcjonalne, ale także wygodne. Poczujesz się tu lepiej niż w hotelu pięciogwiazdkowym.</p>
            </div>
            <div className='description__carousel'>
                <Carousel autoPlay showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} infiniteLoop interval='2000' transitionTime='500'>
                    {carousel.map((photo, index)=>{
                        return (
                                <div key={index}>
                                    <img src={photo} alt='apartament'/>
                                </div>
                            )
                    })}
                </Carousel>
                {/*<img className='description__photo' src={bath} alt='bath'/>*/}
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
//Z pewnością urlop w naszych apartamentach zagwarantuje miłe wspomnienia ze wspólnego wypoczynku.