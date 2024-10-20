import Link from 'next/link';
import Image from 'next/image';
import Styles from "../footer/footer.module.css";

export default function Footer() {
    return (
        <div className={Styles.footer}>  
            <ul className={Styles.socialMedia}>
                <li>
                    <Link href="/instagram">
                        <Image 
                            src='/images/instagram.png'
                            alt='Instagram'
                            width={24} 
                            height={24}
                            loading="eager"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/facebook">
                        <Image 
                            src='/images/facebook.png'
                            alt='Facebook'
                            width={24} 
                            height={24}
                            loading="eager"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/threads">
                        <Image 
                            src='/images/threads.png'
                            alt='Threads'
                            width={24} 
                            height={24}
                            loading="eager"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/twitter">
                        <Image 
                            src='/images/twitter.png'
                            alt='Twitter'
                            width={24} 
                            height={24}
                            loading="eager"
                        />
                    </Link>
                </li>
            </ul>
            <ul className={Styles.pages}>
                <li>
                    <Link href="/tentang">Tentang</Link>
                </li>
                <li>
                    <Link href="/kontak">Kontak</Link>
                </li>
                <li>
                    <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
                </li>
                <li>
                    <Link href="/ketentuan-pengguna">Ketentuan Pengguna</Link>
                </li>
            </ul>
            <p>© 2024 thisismeaji. All Rights Reserved.</p>
        </div>
    );
}
