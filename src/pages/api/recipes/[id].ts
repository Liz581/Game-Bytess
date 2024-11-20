import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore(app);
const recipesRef = db.collection("recipes");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const game = formData.get("game")?.toString();
  const description = formData.get("description")?.toString();
  const ingredients = formData.get("ingredients")?.toString();
  const steps = formData.get("steps")?.toString();
  const imageURL = formData.get("imageURL")?.toString();

  if (!name || !game || !description || !ingredients || !steps || !imageURL) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }

  if (!params.id) {
    return new Response("Cannot find friend", {
      status: 404,
    });
  }

  try {
    await recipesRef.doc(params.id).update({
        name,
        game,
        description,
        ingredients,
        steps,
        imageURL,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/dashboard");
};

export const DELETE: APIRoute = async ({ params, redirect }) => {
  if (!params.id) {
    return new Response("Cannot find friend", {
      status: 404,
    });
  }

  try {
    await recipesRef.doc(params.id).delete();
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/dashboard");
};