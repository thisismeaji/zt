// components/PostHighlight.js
import React from 'react';
import Styles from "../posthighlight/posthighlight.module.css";

const PostHighlight = ({ title, description, buttonLabel, image }) => {
    return (
        <article className={Styles.article}>
            <div className={Styles.postHighlight}>
                <div className={Styles.image}>   
                    <img src={image} alt={title} className={Styles.image} /> 
                </div>
                <div className={Styles.postDesc}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button>{buttonLabel}</button>
                </div>
            </div>
        </article>
    );
};

export default PostHighlight;
