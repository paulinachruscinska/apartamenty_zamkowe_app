import Carina from "./Carina";
import Elisa from "./Elisa";

export default function Gallery(){
    return (
        <main className='gallery'>
            <h3>Spędź cudowny wieczór</h3>
            <h2>POZNAJ NASZĄ OFERTĘ</h2>
            <section className='apartaments'>
                    <Carina/>
                    <Elisa/>
            </section>
        </main>
    )
}