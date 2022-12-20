import img2 from '../images/session1.jpg';
import img9 from '../images/AC15.jpg';
import img10 from '../images/AC17.jpg';



export default function Decription(){
    return(
        <section className='description'>
                <h2 className='description__header'>Odkryj nasze wyjątkowe apartamenty</h2>
            <section className='description__container'>
                <div className='description__box'>
                    <div className='description__photo'>
                        <img alt='session' src={img2} className='description__item1 '/>
                    </div>
                    <div className='description__item2 description__text'>
                        <h3 className='description__text--header'>Komfort przede wszystkim</h3>
                        <p className='description__text--p'>Apartamenty, które oferujemy charakteryzują się nadzwyczajnym komfortem oraz nieprzeciętnym wnętrzem.
                        Są idealnym miejscem na romantyczne wieczory, noce poślubne, pauzę w podróży czy sesje fotograficzne.
                        Z pewnością urlop w naszych apartamentach zagwarantuje miłe wspomnienia ze wspólnego wypoczynku.</p>
                    </div>
                </div>
                <div className='description__box'>
                    <div className='description__photo'>
                        <img alt='kitchen' src={img9} className='description__item3 '/>
                    </div>
                    <div className='description__item4 description__text'>
                        <h3 className='description__text--header'>Wszystko czego potrzebujesz</h3>
                        <p className='description__text--p'>W pełni wyposażony aneks kuchenny czy strefa wypoczynku sprawiają, że nawet w podróży służbowej goście mogą
                        poczuć się jak w domu.</p>
                    </div>
                </div>
                <div className='description__box'>
                    <div className='description__photo'>
                        <img src={img10} alt='tv' className='description__item5 '/>
                    </div>
                    <div className='description__item6 description__text'>
                        <h3 className='description__text--header'>Najwyższy standard</h3>
                        <p className='description__text--p'>Nasze apartamenty można wynająć na doby, dni, a także miesiące. Stworzyliśmy apartamenty, które są
                        nie tylko funkcjonalne, ale także wygodne.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

//Apartamenty zamkowe znajdują się w samym centrum Kwidzyna.
//                 Są idealnym miejscem na romantyczne wieczory, noce poślubne, pauzę w podróży czy sesje
//                 fotograficzne. W każdej opcji zakwaterowania znajduje się kuchnia z pełnym wyposażeniem,
//                 w tym lodówką, jak również część wypoczynkowa z sofą, telewizor z płaskim ekranem,
//                 pralka oraz prywatna łazienka z prysznicem i suszarką do włosów.
//                 Wyposażenie obejmuje także piekarnik, płytę kuchenną i czajnik.