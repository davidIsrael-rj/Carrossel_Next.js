import styles from '../../template/carrossel/Carrossel2.module.css'
import mesa1 from '../../../public/imgs/mesa1.jpg'
import mesa2 from '../../../public/imgs/mesa2.jpg'
import mesa3 from '../../../public/imgs/mesa3.jpg'
import predio from '../../../public/imgs/predio.jpg'
import predio2 from '../../../public/imgs/predio2.jpg'
import predio3 from '../../../public/imgs/predio3.jpg'
import reuniao1 from '../../../public/imgs/reuniao1.jpg'
import computador1 from '../../../public/imgs/computador1.jpg'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Carrossel2() {

    const [translateX, setTranslateX] = useState(0);

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
    const intervalo = setInterval(() => {
      setTranslateX((prevTranslateX) => prevTranslateX - 1);
      if (translateX < -imagens.length * 25) {
        setTranslateX(0);
      }
    }, 300);
    return () => clearInterval(intervalo);
  }, [translateX, imagens.length]);
    return (
    <div className={styles.carrossel}>
      <div className={styles.carrosselItens} style={{ transform: `translateX(${translateX}%)` }}>
        {imagens.map((imagem, indice) => (
          <div key={indice} className={styles.carrosselItem}>
            <Image className={styles.imag} src={imagem.src} alt={imagem.alt} />
          </div>
        ))}
        {imagens.map((imagem, indice) => (
          <div key={indice + imagens.length} className={styles.carrosselItem}>
            <Image className={styles.imag} src={imagem.src} alt={imagem.alt} />
          </div>
        ))}
      </div>
    </div>
)
}