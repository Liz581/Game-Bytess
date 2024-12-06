import axios from "axios";
import type { APIRoute } from "astro";

const BASE_URL = "https://api.igdb.com/v4/";

export const get: APIRoute = async ({ url }) => {
  const endpoint = url.searchParams.get("endpoint") || "games";
  const headers = {
    "Client-ID": import.meta.env.VITE_TWITCH_CLIENT_ID,
    Authorization: `Bearer ${import.meta.env.VITE_TWITCH_ACCESS_TOKEN}`,
    Body: "fields *;",
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/${endpoint}`,
      // Example body for the IGDB API:
      "fields name,summary,cover.url; limit 10;", // Customize query here
      { headers }
    );
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred"; // Fallback message for unknown errors

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
