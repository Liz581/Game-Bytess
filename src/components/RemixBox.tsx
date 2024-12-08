import React, { useState } from "react";
import styles from "./RemixBox.module.css";
import type { remixRecipe } from '../recipes_schema';

interface RemixBoxProps {
    remix: remixRecipe,
}

const RemixBox: React.FC<RemixBoxProps> = ({ remix }) => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <div key={remix.id} className={styles["remix-card"]}>
            <img 
                src={remix.imageURL} 
                alt={remix.user}
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/plateholder.png';
                }}
                className={styles["remix-image"]} 
            />
            <div className={styles["remix-info"]}>
                <h2>{remix.comment}</h2>
                <p>{remix.user}</p>
            </div>
            <a href="/add-remix" className={styles["remix-link"]}>
                <button className={styles["button"]} type="submit">
                    {liked ? 'Liked!' : 'Like'}
                </button>
            </a>
        </div>
    )
}

export default RemixBox