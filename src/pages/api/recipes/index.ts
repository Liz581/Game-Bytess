import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";
// import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

// Contain the code to create a new document in the recipes collection
export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const game = formData.get("game")?.toString();
  const description = formData.get("description")?.toString();
  const ingredients = formData.get("ingredients")?.toString();
  const steps = formData.get("steps")?.toString();
  const imageURL = formData.get("imageURL")?.toString();
  const likes = 0;

  if (!name || !game || !description || !ingredients || !steps || !imageURL) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const recipesRef = db.collection("recipes");
    await recipesRef.add({
      name,
      game,
      description,
      ingredients,
      steps,
      imageURL,
      likes
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/dashboard");
};