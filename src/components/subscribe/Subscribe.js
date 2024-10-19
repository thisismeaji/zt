'use client';

import Styles from "../subscribe/subscribe.module.css";
import { useState } from 'react';

export default function Subscribe() {
    const [inputValue, setInputValue] = useState('');
    const [placeholderVisible, setPlaceholderVisible] = useState(true);

    const handleChange = (event) => {
        setInputValue(event.target.value); // Memperbarui state dengan nilai input
    };

    const handleFocus = () => {
        setPlaceholderVisible(false); // Menghilangkan placeholder saat input difokuskan
    };

    const handleBlur = () => {
        // Menampilkan placeholder kembali jika input kosong
        if (!inputValue) {
            setPlaceholderVisible(true);
        }
    };

    return (
        <form className={Styles.subscribe}>
            <input
                type="email"
                id="email"
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus} // Event saat input difokuskan
                onBlur={handleBlur}   // Event saat input kehilangan fokus
                placeholder={placeholderVisible ? "Masukan alamat email" : ""} // Placeholder dinamis
                required // Menandakan bahwa input ini wajib diisi
            />
            <button type="submit">Subscribe</button>
        </form>
    );
}
