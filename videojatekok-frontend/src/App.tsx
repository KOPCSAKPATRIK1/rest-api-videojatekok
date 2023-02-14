import { Card, Grid, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { GameDto } from "./api/dto/game.dto";
import { VideoGameApi } from "./api/videoGame.api";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [games, setGames] = useState<GameDto[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const rep = await VideoGameApi.getAll();
      setGames(rep);
    }
    fetchAll();
  }, []);

  const deleteGame = (gameId: number) => {
    setGames(games.filter((g) => g.id !== gameId))
    
  }

  return (
    <div>
      <Grid container 
      alignItems="center"
      justifyContent="center"
      spacing={1}>
      {games.map((game) => {
          return (
            <Grid item> 
              <Game data={game} onGameDelete={deleteGame}/>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

export default App;
