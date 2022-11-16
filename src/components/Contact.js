import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import facebookLogo from '../images/facebook.svg';
import instagramLogo from '../images/instagram.svg';

const contactInformation=[
    {
        main: "lokalizacja",
        additionalInformation_first: 'Józefa Piłsudskiego 15D',
        additionalInformation_second: '82-500',
    },
    {
        main: "email/telefon",
        additionalInformation_first: 'biuro@apartamentyzamkowe.com',
        additionalInformation_second: '+48 720 837 920',
    },
]

const links = [
    {
        text: '/facebook',
        image: facebookLogo,
        alt: 'facebook-logo'
    },
    {
        text: '/instagram',
        image: instagramLogo,
        alt: 'instagram-logo'
    }
]

export default function Contact(){
    return(
        <section className='contact'>
            <div className='contact__head'>
                <h3>Otaczaj się pięknem</h3>
                <span className='line'/>
                <h2>Kontakt</h2>

            </div>
            <div className='contact__body'>
                <div className='contact__body__text'>
                    {contactInformation.map((information, index)=>{
                        return(
                            <div className='contact__body__text__box' key={index}>
                                <p className='text--main'>{information.main}</p>
                                <p className='text'>{information.additionalInformation_first}</p>
                                <p className='text'>{information.additionalInformation_second}</p>
                            </div>
                        )
                    })}
                    <div className='contact__logo'>

                        {links.map(link=>{
                            return(
                            <Router>
                                <Link to={link.text}>
                                    <div className={'logo__link ' + link.alt}/>
                                </Link>
                                <Routes>
                                    <Route path='/facebook' element={<Facebook/>}/>
                                    <Route path='/instagram' element={<Instagram/>}/>
                                </Routes>
                            </Router>
                            )
                        })}
                    </div>
                </div>
                <div className='contact__body__photo'/>
            </div>

        </section>
    )
}
function Facebook(){
    window.location.replace('https://www.facebook.com/Apartamentydeptak');
    return null;
}
function Instagram(){
    window.location.replace('https://instagram.com/apartamentyzamkowe?igshid=YmMyMTA2M2Y=');
    return null;
}