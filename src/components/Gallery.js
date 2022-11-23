const apartaments=[
    {
        main: 'carina',
    },
    {
        main: 'elisa',
    }
]

export default function Gallery(){
    return (
        <main className='gallery'>
            <h3>Przepiękne apartamenty w samym Centrum Miasta</h3>
            <h2>zapoznaj się z naszą ofertą</h2>
            <section className='apartaments'>
            {apartaments.map(apartament=>{
                return(
                    <section className={'apartament ' + apartament.main}>

                    </section>
                )
            })}
            </section>
        </main>
    )
}