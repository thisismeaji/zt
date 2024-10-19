import Styles from "../navigation/navigation.module.css";
import Link from 'next/link';

export default function Navigation() {
    return(
        <nav className={Styles.nav}>
            <div className={Styles.logo}>
                <h1>ZonaTenang.com</h1>
            </div>
            <div className={Styles.navDekstop}>
                <ul>
                    <li>
                        <Link href="/">Beranda</Link>
                    </li>
                    <li>
                        <Link href="/tips-dan-trik">Tips dan Trik</Link>
                    </li>
                </ul>
            </div>
            <div className={Styles.menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={Styles.navMobile}>
                <ul>
                    <li>
                        <Link href="/">Beranda</Link>
                    </li>
                    <li>
                        <Link href="/tips-dan-trik">Tips dan Trik</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}