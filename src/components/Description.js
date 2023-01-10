import Carousel from "./Carousel";
import carouselPhoto from "../data/carouselPhoto";



export default function Description(){
    return(
        <section className='description'>
            <div className='description__text'>
                <div className='description__text-box'>
                <h3 className='description__header'>Odkryj nasze wyjątkowe apartamenty</h3>
                <p className='text'>Apartamenty, które oferujemy charakteryzują się nadzwyczajnym
                    komfortem oraz nieprzeciętnym wnętrzem.
                    Są idealnym miejscem na romantyczne wieczory, noce poślubne, pauzę w podróży czy sesje fotograficzne.</p>
                <p className='text'>W pełni wyposażony aneks kuchenny czy strefa wypoczynku sprawiają,
                    że nawet w podróży służbowej goście mogą
                    poczuć się jak w domu. Luksusowa łazienka czy nowoczesny wygląd sprawiają, że pobyt tu to prawdziwa przyjemność.</p>
                <p className='text'>Nasze apartamenty można wynająć na doby, dni, a także miesiące.
                    Stworzyliśmy apartamenty, które są
                    nie tylko funkcjonalne, ale także wygodne. Poczujesz się tu lepiej niż w hotelu pięciogwiazdkowym.</p>
                </div>
            </div>
            <div className='description__carousel'>
                <Carousel carousel={carouselPhoto}/>
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