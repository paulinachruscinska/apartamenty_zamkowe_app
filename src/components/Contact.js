const contactInformation=[
    {
        main: "lokalizacja",
        additionalInformation_first: 'Józefa Piłsudskiego 15D',
        additionalInformation_second: '82-500',
    },
    {
        main: "email/telefon",
        additionalInformation_first: 'email@gmail.com',
        additionalInformation_second: '+48 720 837 920',
    },
]

export default function Contact(){
    return(
        <section className='contact'>
            <div className='contact__head'>
                <h3>Otaczaj się pięknem</h3>
                <h2>Kontakt</h2>
                <span className='line'/>
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

                </div>
                <div className='contact__body__photo'/>
            </div>
        </section>
    )
}