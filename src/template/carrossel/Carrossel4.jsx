import Image from 'next/image';
import mesa1 from '../../../public/imgs/mesa1.jpg'
import mesa2 from '../../../public/imgs/mesa2.jpg'
import mesa3 from '../../../public/imgs/mesa3.jpg'
import predio from '../../../public/imgs/predio.jpg'
import predio2 from '../../../public/imgs/predio2.jpg'
import predio3 from '../../../public/imgs/predio3.jpg'
import reuniao1 from '../../../public/imgs/reuniao1.jpg'
import computador1 from '../../../public/imgs/computador1.jpg'
import styles from '../../template/carrossel/Carrossel4.module.css';

export default function Carrossel4({ largura=150, altura = 100, velocidade = 30 }) {
  // imagens originais
  const imagens = [mesa1, mesa2, mesa3, predio, predio2, predio3, reuniao1, computador1];

  // duplicamos as imagens para criar loop contínuo
  const imagensDuplicadas = [...imagens, ...imagens];

  return (
    <div className={styles.carrossel}>
      <div
        className={styles.track}
        style={{ animationDuration: `${velocidade}s` }}
      >
        {imagensDuplicadas.map((src, i) => (
          <div key={i} className={styles.item} style={{ width: largura ,height: altura }}>
            <Image
              src={src}
              alt={`img-${i}`}
              width={largura}
              height={altura}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
