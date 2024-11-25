import type { APIRoute } from "astro";
// import { getAuth } from "firebase-admin/auth";
// import { app } from "../../../firebase/server";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth();

  /* Get form data */
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  console.log("here");

  if (!email || !password || !name) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }
  console.log("here2");

  /* Create user */
  try {
    // await auth.createUser({
    //   email,
    //   password,
    //   displayName: name,
    // });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
  } catch (error: any) {
    return new Response(
      "Something went wrong",
      { status: 400 }
    );
  }
  
  console.log("here3");
  return redirect("/signin");
};