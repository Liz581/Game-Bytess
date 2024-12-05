import React from "react";
import styles from "./RecipeCard.module.css";

function RecipeCard({ title, game, image }) {
  return (
    <div className={styles["recipe-card"]}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{game}</p>
      <button className={styles["button"]} type="submit">
        I remixed this!
      </button>
      <p></p>
    </div>
  );
}

export default RecipeCard;
