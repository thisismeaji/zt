import Styles from "../hero/hero.module.css";
import Subscribe from "../subscribe/Subscribe";

export default function Hero() {
    return(
        <div className={Styles.hero}>
            <div className={Styles.mainHero}>
                <h1>Tempat Nyaman Buat Kamu yang Suka Sendiri</h1>
                <p>Temukan informasi Seputar Tips dan Trik untuk Kaum Introvert dengan fokus pada pengembangan diri yang tenang dan santai</p>
                <Subscribe/>
            </div>
        </div>
    );
}