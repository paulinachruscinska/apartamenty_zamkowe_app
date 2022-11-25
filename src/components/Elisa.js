import {useState} from "react";
import ImageGallery from "react-image-gallery";
import img1 from "../images/AE1.jpg";
import img2 from "../images/AE2.jpg";
import img3 from "../images/AE3.jpg";
import img4 from "../images/AE4.jpg";
import img5 from "../images/AE5.jpg";
import img6 from "../images/AE6.jpg";
const images = [
    {
        original: img1,
        //thumbnail: img1,
        //originalHeight: '500px',
        //thumbnailHeight: '70px',
        //thumbnailWidth: '70px'


    },
    {
        original: img2,
        //thumbnail: img2,
        //originalHeight: '500px',
        //thumbnailHeight: '50px'

    },
    {
        original: img3,
        //thumbnail: img3,
        //originalHeight: '500px'
        //thumbnailHeight: '50px'

    },
    {
        original: img4,
        //thumbnail: img4,
        //originalHeight: '500px'
        //thumbnailHeight: '50px'

    },
    {
        original: img5,
       // thumbnail: img5,
        //originalHeight: '500px'
        //thumbnailHeight: '50px'
    },
    {
        original: img6,
        //thumbnail: img6,
        //originalHeight: '500px'
        //thumbnailHeight: '50px'
    }
]
export default function Elisa(){
    const [active, setActive] = useState('')
    const [modal, setModal]=useState(false)
    const handleModal=()=>{
        setModal(true)
        setActive('active')
    }
    return (
        <>
            <section className='apartament elisa' onClick={handleModal}>
                <div className='hover'>
                    <p className='hover__text'>Apartament ELISA</p>
                </div>
            </section>
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