import {useState} from "react";
import ImageGallery from "react-image-gallery";
import img1 from '../images/AC1.jpg';
import img2 from '../images/AC2.jpg';
import img3 from '../images/AC3.jpeg';
import img4 from '../images/AC4.jpeg';
import img5 from '../images/AC5.jpg';
import img6 from '../images/AC6.jpeg';
import img7 from '../images/AC7.jpeg';
import img9 from '../images/AC9.jpeg';
import img10 from '../images/AC10.jpeg';
import img11 from '../images/AC11.jpeg';
import img12 from '../images/AC12.jpg';
import img13 from '../images/AC13.jpg';
import img14 from '../images/AC14.jpg';
import img15 from '../images/AC15.jpg';
import img16 from '../images/AC16.jpg';
import img17 from '../images/AC17.jpg';
import img18 from '../images/AC18.jpg';
const images = [
    {
        original: img1,
        //thumbnail: img1,

    },
    {
        original: img2,
        //thumbnail: img2,
        //originalHeight: '500px'

    },
    {
        original: img3,
        //thumbnail: img3,
        //originalHeight: '500px'

    },
    {
        original: img4,
        //thumbnail: img4,
        //originalHeight: '500px'

    },
    {
        original: img5,
        //thumbnail: img5,
        //originalHeight: '500px'

    },
    {
        original: img6,
        //thumbnail: img6,
        //originalHeight: '500px'

    },
    {
        original: img7,
        //thumbnail: img7,
        //originalHeight: '500px'

    },
    {
        original: img9,
        //thumbnail: img9,
        //originalHeight: '500px'

    },
    {
        original: img10,
        //thumbnail: img10,
        //originalHeight: '500px'

    },
    {
        original: img11,
        //thumbnail: img11,
        //originalHeight: '500px'

    },
    {
        original: img12,
        //thumbnail: img12,
        //originalHeight: '500px'

    },
    {
        original: img13,
        //thumbnail: img13,
        //originalHeight: '500px'

    },
    {
        original: img14,
        //thumbnail: img14,
        //originalHeight: '500px'

    },
    {
        original: img15,
        //thumbnail: img15,
        //originalHeight: '500px'

    },
    {
        original: img16,
        //thumbnail: img16,
        //originalHeight: '500px'

    },
    {
        original: img17,
        //thumbnail: img17,
        //originalHeight: '500px'

    },
    {
        original: img18,
        //thumbnail: img18,
        //originalHeight: '500px'

    }

]

export default function Carina(){
    const [active, setActive] = useState('')
    const [modal, setModal]=useState(false)
    const handleModal=()=>{
        setModal(true)
        setActive('active')
    }
    return(
        <>
        <section className='apartament carina' onClick={handleModal}/>
            {modal && (
            <div className={'modal' + active}>
                <div className='overlay'>
                    <div className='modal--content'>
                        <ImageGallery
                            items={images}
                            showNav={true}
                            autoPlay={true}
                            disableSwipe={true}
                        />
                        <button onClick={()=>setModal(false)} className='exit'></button>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}