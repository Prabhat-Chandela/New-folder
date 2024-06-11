import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { MagazineCard } from '../index';



register();

function SwiperCarousel({ allMagazines }) {
    const swiperElRef = useRef(null);

    useEffect(() => {

        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <swiper-container
            ref={swiperElRef}
            effect="coverflow"
            grab-cursor="true"
            centered-slides="true"
            coverflow-effect-rotate="0"
            coverflow-effect-stretch="0"
            coverflow-effect-depth="350"
            coverflow-effect-modifier="1"
            coverflow-effect-slide-shadows="true"
            pagination="true"
            slides-per-view="3"
            loop="true"

        >
            {
                allMagazines.map((magazine) => (
                    <swiper-slide key={magazine.$id}><div className='w-full'> <MagazineCard {...magazine} /> </div></swiper-slide>
                ))
            }

        </swiper-container>
    )
}

export default SwiperCarousel