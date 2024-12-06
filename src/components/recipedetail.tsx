interface Recipe {
  id: string;
  name: string;
  game: string;
  description: string;
  ingredients: string | string[]; // Can be a string or an array of strings
  steps: string | string[]; // Can be a string or an array of strings
  imageURL: string;
}

const RecipeDetail = ({ recipe }: { recipe: Recipe }) => {
  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients
    : recipe.ingredients
        .split("\n") // Split ingredients by newline
        .map((ingredient) => ingredient.trim()) // Trim whitespace
        .filter(Boolean) // Remove empty strings
        .map((ingredient) => ingredient.replace(/,/g, "")); // Remove commas

  const steps = Array.isArray(recipe.steps)
    ? recipe.steps
    : recipe.steps
        .split(".") // Split by period
        .map((step) => step.trim()) // Trim whitespace
        .filter(Boolean) // Remove empty strings
        .map((step) => step.replace(/,/g, "")); // Remove commas

  console.log("Ingredients after processing:", ingredients); // Debug log for ingredients
  console.log("Steps after processing:", steps); // Debug log for steps

  return (
    <div
      className="container"
      style={{
        display: "flex",
        background: "linear-gradient(45deg, #ffa9a9, #fffeb1)",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className="recipe-card"
        style={{
          background: "beige",
          fontFamily: "Nunito",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "20px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          alignContent: "center",
        }}
      >
        <img
          src={recipe.imageURL}
          alt={recipe.name}
          style={{
            width: "250px",
            height: "100%",
            borderRadius: "10px",
          }}
        />
        <h1 style={{ fontSize: "2em", margin: "10px 0" }}>{recipe.name}</h1>
        <p>
          <strong>Game:</strong> {recipe.game}
        </p>
        <p>
          <strong>Description:</strong> {recipe.description}
        </p>
        <h3 style={{ marginTop: "20px" }}>Ingredients</h3>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {ingredients.map((item, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              {item}
            </li>
          ))}
        </ul>
        <h3 style={{ marginTop: "20px" }}>Steps</h3>
        <ol style={{ paddingLeft: "20px" }}>
          {steps.map((step, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
