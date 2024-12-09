import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";
// import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

// Contain the code to create a new document in the recipes collection
export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const recipe = formData.get("recipe")?.toString();
  const user = formData.get("user")?.toString();
  const comment = formData.get("comment")?.toString();
  const imageURL = formData.get("imageURL")?.toString();
  const likes = 0;

  console.log(recipe);
  console.log(user);
  console.log(comment);
  console.log(imageURL);

  if (!recipe || !user || !comment || !imageURL) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);

    let newID = 0
    let rec_id = 0
    const remixesRef = db.collection("remixes");
    const remixesQuerySnapshot = await remixesRef.get();
    newID = remixesQuerySnapshot.size + 1;

    const recipeQuery = db.collection("recipes").where("name", "==", recipe);
    const querySnapshot = await recipeQuery.get();  // Use await instead of .then()

    if (!querySnapshot.empty) {
        const firstDoc = querySnapshot.docs[0];  // Get the first document in the query result
        console.log(firstDoc);
        console.log(firstDoc.data().id);
        rec_id = parseInt(firstDoc.data().id, 10);  // Get the document ID (recipe ID) as an integer
    } else {
        console.log("No recipes found with that name!");
    }

    await remixesRef.add({
        id: newID,
        recipe_id: rec_id,
        user,
        comment,
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