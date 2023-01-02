import img1 from '../images/AC12.jpg'
import img2 from '../images/AC19.jpg'
import img3 from '../images/session3.jpg'

export default function AboutUs(){
    return(
        <section className='about-us'>
            <h3>Pozwól sobie na najwyższy komfort noclegu</h3>
            <h2>Zrelaksuj się w naszych apartamentach</h2>
            <p>Niezależnie, czy pobyt tutaj jest podyktowany chęcią odpoczynku od zgiełku
            dnia codziennego, czy wybierasz się w podróż służbową - pozwól sobie
                na odpoczynek w <span>naszych apartamentach. </span></p>
            <div className='about-us__photos'>
                <div className='about-us__photo'>
                    <img src={img1} alt='apartament'/>
                    <p>Estetyka</p>
                </div>
                <div className='about-us__photo'>
                    <img src={img2} alt='apartament'/>
                    <p>Wygoda</p>
                </div>
                <div className='about-us__photo'>
                <img src={img3} alt='apartament'/>
                    <p>Piękno</p>
            </div>
            </div>
            <div className='photo'/>
        </section>
    )
}

//Lokalizacja w samym sercu miasta umożliwia szybkie dostanie się do dowolnego zakamarka Kwidzyna. W pobliżu znajdują
//                 się restauracje, kawiarnie, sklepy, siłownia.