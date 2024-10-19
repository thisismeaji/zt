import React from 'react';
import Styles from "../posthighlight/posthighlight.module.css";
import Image from 'next/image';
import Link from 'next/link';

const PostHighlight = ({ title, description, buttonLabel, image, link }) => {
    return (
        <article className={Styles.article}>
            <div className={Styles.postHighlight}>
                {/* Link untuk gambar */}
                <div className={Styles.image}>
                    <Link href={link}>
                        <Image 
                            src={image} 
                            alt={title} 
                            className={Styles.image} 
                            width={1920} 
                            height={1080}
                            loading="eager"
                        />
                    </Link>
                </div>
                <div className={Styles.postDesc}>
                    {/* Link untuk judul */}
                    <h2>
                        <Link href={link}>
                            {title}
                        </Link>
                    </h2>
                    <p>{description}</p>
                    {/* Link untuk tombol */}
                    <Link href={link}>
                        <button>{buttonLabel}</button>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default PostHighlight;
