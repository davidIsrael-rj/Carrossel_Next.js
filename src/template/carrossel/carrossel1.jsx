import { useEffect, useRef, useState } from 'react';
import styles from '@/template/carrossel/Carrossel1.module.css'
import Image from 'next/image';
import mesa1 from '../../../public/imgs/mesa1.jpg'
import mesa2 from '../../../public/imgs/mesa2.jpg'
import mesa3 from '../../../public/imgs/mesa3.jpg'
import predio from '../../../public/imgs/predio.jpg'
import predio2 from '../../../public/imgs/predio2.jpg'
import predio3 from '../../../public/imgs/predio3.jpg'
import reuniao1 from '../../../public/imgs/reuniao1.jpg'
import computador1 from '../../../public/imgs/computador1.jpg'


export default function Carrossel1() {
   const [indiceAtual, setIndiceAtual] = useState(0);
    const indiceRef = useRef(indiceAtual);
    const intervaloRef = useRef(null);

    const imagens = [
        { src: mesa1, alt: 'Imagem 1' },
        { src: mesa2, alt: 'Imagem 2' },
        { src: mesa3, alt: 'Imagem 3' },
        { src: predio, alt: 'Imagem 4' },
        { src: predio2, alt: 'Imagem 4' },
        { src: predio3, alt: 'Imagem 4' },
        { src: reuniao1, alt: 'Imagem 4' },
        { src: computador1, alt: 'Imagem 4' },
    ];

    useEffect(() => {
        indiceRef.current = indiceAtual;
    }, [indiceAtual]);

    useEffect(() => {
        intervaloRef.current = setInterval(() => {
            setIndiceAtual((indiceRef.current + 1) % imagens.length);
        }, 3000);

        return () => clearInterval(intervaloRef.current);
    }, [imagens.length]);

    const handleAnterior = () => {
        setIndiceAtual((indiceAtual - 1 + imagens.length) % imagens.length);
    };

    const handleProximo = () => {
        setIndiceAtual((indiceAtual + 1) % imagens.length);
    };
    return (
         < div className={styles.carrossel} >
            <div className={styles.carrosselItens}>
                {imagens.map((imagem, indice) => (
                    <div key={indice} className={`${styles.carrosselItem} ${indice === indiceAtual ? styles.active : ''}`} >
                        <Image className={styles.carrosselItemImg} src={imagem.src} alt={imagem.alt} />
                    </div>
                ))}
            </div>
            <button className={styles.carrosselAnterior} onClick={handleAnterior}> &#10094; </button>
            <button className={styles.carrosselProximo} onClick={handleProximo}> &#10095; </button>
            <div className={styles.carrosselPaginacao}>
                {imagens.map((imagem, indice) => (
                    <span key={indice} className={`${styles.carrosselPagina} ${indice === indiceAtual ? styles.active : ''}`} onClick={() => setIndiceAtual(indice)} />
                ))}
            </div>
        </div >
    )
}

