'use client';

import { useState } from 'react'; // Import useState
import Styles from "../navigation/navigation.module.css";
import Link from 'next/link';

export default function Navigation() {
    const [isNavActive, setIsNavActive] = useState(false); // State untuk menangani kelas

    const handleMenuClick = () => {
        setIsNavActive(prev => !prev); // Toggle state saat menu diklik
    };

    const handleLinkClick = () => {
        setIsNavActive(false); // Menutup navMobile saat link diklik
    };

    return (
        <nav className={Styles.nav}>
            <div className={Styles.logo}>
                <p>ZonaTenang</p>
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
            <div className={Styles.menu} onClick={handleMenuClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`${Styles.navMobile} ${isNavActive ? Styles.navActive : ''}`}>
                <div>
                    <p>Menu</p>
                </div>
                <ul>
                    <li>
                        <Link href="/" onClick={handleLinkClick}>Beranda</Link> {/* Tambahkan onClick di sini */}
                    </li>
                    <li>
                        <Link href="/tips-dan-trik" onClick={handleLinkClick}>Tips dan Trik</Link> {/* Tambahkan onClick di sini */}
                    </li>
                </ul>
            </div>
            {isNavActive && <div className={Styles.backdrop} onClick={handleMenuClick} />} {/* Layer untuk blur */}
        </nav>
    );
}
