import { config } from 'dotenv'
import fs from 'fs/promises'
// import { app } from './src/firebase/server.ts'
import { getFirestore } from "firebase-admin/firestore";
import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

config()
const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
};

const initApp = () => {
    // restarted typescript in order to configure -> ctrl+shft+p -> restart typescript
  if (process.env.PROD) {
    console.info('PROD env detected. Using default service account.')
    // Use default config in firebase functions. Should be already injected in the server by Firebase.
    return initializeApp()
  }
  console.info('Loading service account from env.')
  return initializeApp({
    credential: cert(serviceAccount as ServiceAccount)
  })
}

export const app = activeApps.length === 0 ? initApp() : activeApps[0];

const db = getFirestore(app);
// const db = app.firestore();

// Function to delete all documents in the recipes collection
// async function clearRecipesCollection() {
//     try {
//         const recipesCollection = collection(db, 'recipes')
//         const recipesSnapshot = await getDocs(recipesCollection)
//         const deletePromises = recipesSnapshot.docs.map((doc) =>
//             deleteDoc(doc.ref)
//         )
//         await Promise.all(deletePromises)
//         console.log('recipes collection cleared')
//     } catch (error) {
//         console.error('Error clearing recipes collection:', error)
//     }
// }

// Add recipes to Firestore
async function addRecipes() {
    try {
        // Read and parse the JSON file
        const data = await fs.readFile('./recipes.json', 'utf8')
        const recipes = JSON.parse(data).recipes

        // Clear existing recipes
        // await learRecipesCollection()

        // Create a batch
        const batch = db.batch()

        for (const id in recipes) {
            const recipe = recipes[id]
            const recipeRef = db.collection('recipes').doc(id)
            batch.set(recipeRef, {
                id: parseInt(id),
                name: recipe.name,
                game: recipe.game,
                description: recipe.description,
                ingredients: recipe.ingredients,
                steps: recipe.steps,
                imageURL: recipe.imageURL,
            })
        }

        // Commit the batch
        await batch.commit()
        console.log('All recipes added in batch')
        process.exit(0)
    } catch (error) {
        console.error('Error reading recipes.json:', error)
        process.exit(1)
    }
}

await addRecipes()