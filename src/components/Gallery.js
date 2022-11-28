import Carina from "./Carina";
import Elisa from "./Elisa";

export default function Gallery(){
    return (
        <main className='gallery'>
            <h3>Spędź cudowny wieczór</h3>
            <h2>POZNAJ NASZĄ OFERTĘ</h2>
            <section className='apartaments'>
                <div className='apartament__box'>
                    <div className='apartament__text'>
                        <h3>CARINA</h3>
                        <p className='description__text'>Klimatyczny apartament, który zachwyca elegancją
                        oraz stylowym wykończeniem wnętrz</p>
                    </div>
                    <Carina/>
                </div>
                <Elisa/>
            </section>
        </main>
    )
}