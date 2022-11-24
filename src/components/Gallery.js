import Carina from "./Carina";
import Elisa from "./Elisa";

export default function Gallery(){
    return (
        <main className='gallery'>
            <h3>Przepiękne apartamenty w samym Centrum Miasta</h3>
            <h2>zapoznaj się z naszą ofertą</h2>
            <section className='apartaments'>
                <Carina/>
                <Elisa/>
            </section>
        </main>
    )
}