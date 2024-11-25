import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";
// import {  createUserWithEmailAndPassword } from "firebase/auth"; 

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);

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
    console.log(email)
    console.log(password)
    console.log(name)
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error: any) {
    console.log(error)
    return new Response(
      "Something went wrong",
      { status: 400 }
    );
  }
  
  console.log("here3");
  return redirect("/signin");
};