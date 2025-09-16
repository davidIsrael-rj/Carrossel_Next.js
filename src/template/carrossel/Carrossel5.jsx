import styles from '@/template/carrossel/Carrossel5.module.css'
import {register} from 'swiper/element/bundle'

register();


export default function Carrossel5(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Carrossel5</h1>
        </div>
    )
}