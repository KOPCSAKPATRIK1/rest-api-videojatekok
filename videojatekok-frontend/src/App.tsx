import React, { useEffect, useState } from "react";
import { GameDto } from "./api/dto/game.dto";
import { VideoGameApi } from "./api/videoGame.api";
import "./App.css";

function App() {
  const [games, setGames] = useState<GameDto[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const rep = await VideoGameApi.getAll();

      setGames(rep);
    }

    fetchAll();
  }, []);
  return (
    <div>
      <ul>
        {games.map((game) => {
          return <li> {game.name}, {game.price}, {game.category}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
