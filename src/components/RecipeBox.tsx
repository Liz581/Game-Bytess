import React, { useState } from "react";
import styles from "./RecipeCard.module.css";
import type { Recipe } from '../recipes_schema';

interface RecipeBoxProps {
    recipes: Recipe[],
}

const RecipeBox: React.FC<RecipeBoxProps> = ({ recipes }) => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <div className={styles["recipes-grid"]}>
            {recipes.length === 0 ? (
                <p>No recipes found.</p>
            ) : (
                recipes.map((recipe) => (
                    <div key={recipe.id} className={styles["recipe-card"]}>
                        <a href={`/recipe/${recipe.id}`}>
                            <img src={recipe.imageURL} 
                                alt={recipe.name}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = '/plateholder.png'
                                }}
                            />
                            <h2>{recipe.name}</h2>
                            <p>{recipe.game}</p>

                            <a href={`/add-remix?recipe=${recipe.name}`}>
                                <button className={styles["button"]} type="submit">
                                    I remixed this!
                                </button>
                            </a>
                            <button className={styles["button"]} type="submit">
                                {liked ? 'Liked!' : 'Like'}
                            </button>
                        </a>
                    </div>
                ))
            )}
        </div>
    )
}

export default RecipeBox