import { useEffect, useState } from "react";

const GamesList = () => {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      console.log("before");
      // const response = await fetch("/api/igdb?endpoint=games");
      const response = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
          "Client-ID": import.meta.env.VITE_TWITCH_CLIENT_ID,
          Authorization: `Bearer ${import.meta.env.VITE_TWITCH_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: "fields name; limit 10;", // Example query (adjust as needed)
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }
      const data = await response.json();
      console.log(data);
      setGames(data);
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>
          <h3>{game.name}</h3>
          <p>{game.summary}</p>
          {game.cover && <img src={game.cover.url} alt={game.name} />}
        </li>
      ))}
    </ul>
  );
};

export default GamesList;
