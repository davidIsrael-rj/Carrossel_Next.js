import styles from '@/template/carrossel/Carrossel5.module.css'
import { register } from 'swiper/element/bundle'

register();

import mesa1 from '../../../public/imgs/mesa1.jpg'
import mesa2 from '../../../public/imgs/mesa2.jpg'
import mesa3 from '../../../public/imgs/mesa3.jpg'
import predio from '../../../public/imgs/predio.jpg'
import predio2 from '../../../public/imgs/predio2.jpg'
import predio3 from '../../../public/imgs/predio3.jpg'
import reuniao1 from '../../../public/imgs/reuniao1.jpg'
import computador1 from '../../../public/imgs/computador1.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Carrossel5() {
    const [slidePerView, setSlidePerView] = useState(3)

    const data = [
        { id: 1, image: mesa1 },
        { id: 2, image: mesa2 },
        { id: 3, image: mesa3 },
        { id: 4, image: predio },
        { id: 5, image: predio2 },
        { id: 6, image: predio3 },
        { id: 7, image: reuniao1 },
        { id: 8, image: computador1 },
    ]

    useEffect(() => {

        function handleResize() {
            if (window.innerWidth < 720) {
                setSlidePerView(1);
            } else {
                setSlidePerView(3);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Carrossel5 com Swiper</h1>
            <Swiper
                slidesPerView={slidePerView}
                pagination={{ clickable: true }}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image
                            className={styles.slideItem}
                            src={item.image}
                            alt='Slider'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}