import styles from '@/template/carrossel/Carrossel3d.module.css'
import { useEffect, useState } from "react";
import mesa1 from '../../../public/imgs/mesa1.jpg'
import mesa2 from '../../../public/imgs/mesa2.jpg'
import mesa3 from '../../../public/imgs/mesa3.jpg'
import predio from '../../../public/imgs/predio.jpg'
import predio2 from '../../../public/imgs/predio2.jpg'
import predio3 from '../../../public/imgs/predio3.jpg'
import reuniao1 from '../../../public/imgs/reuniao1.jpg'
import computador1 from '../../../public/imgs/computador1.jpg'
export default function Carrosel3d(){

  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imagens = [
    mesa1.src,
    mesa2.src,
    mesa3.src,
    predio.src,
    predio2.src,
    predio3.src,
    reuniao1.src,
    computador1.src,
  ];

  useEffect(() => {
    if (isPaused) return;

    const step = 360 / imagens.length;
    const interval = setInterval(() => {
      setAngle((prev) => prev - step);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagens.length, isPaused]);

  const rotate = (direction) => {
    const step = 360 / imagens.length;
    setAngle((prev) => prev + (direction === "next" ? -step : step));
  };

  return (
    <div className="flex items-center justify-center h-[500px] bg-black relative">
      {/* Botão Esquerdo */}
      <button
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => rotate("prev")}
        className="absolute left-6 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-white/80 text-black hover:bg-white shadow-lg"
      >
        ◀
      </button>

      {/* Container 3D (carrossel central) */}
      <div className="relative w-[400px] h-[300px] perspective">
        <div
          className="absolute w-full h-full transition-transform duration-1000"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(-500px) rotateY(${angle}deg)`,
          }}
        >
          {imagens.map((src, i) => {
            const step = 360 / imagens.length;
            return (
              <img
                key={i}
                src={src}
                alt={`img-${i}`}
                className="absolute w-[400px] h-[300px] object-cover rounded-xl shadow-lg"
                style={{
                  transform: `rotateY(${i * step}deg) translateZ(500px)`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Botão Direito */}
      <button
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => rotate("next")}
        className="absolute right-6 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-white/80 text-black hover:bg-white shadow-lg"
      >
        ▶
      </button>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
