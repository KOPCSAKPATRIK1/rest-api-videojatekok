
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GameDto } from "./api/dto/game.dto";
import { VideoGameApi } from "./api/videoGame.api";
import "./App.css";
import CreateGameModal from "./components/CreateGameModal";
import Game from "./components/Game";

function App() {
  const [games, setGames] = useState<GameDto[]>([]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [createGamesModalOpen, setCreateGamesModalOpen] = useState(false)

  const addGame = (game: GameDto) => {
    setGames([...games, game])
  }
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
      <CreateGameModal 
      open={createGamesModalOpen} 
      handleClose={() => setCreateGamesModalOpen(false)}
      onGameCreated={addGame}/>
        <AppBar position="static" >
          <Toolbar>
            <Typography color="white" flexGrow={1}>
              Games
            </Typography>
            <Button variant="contained" onClick={() => setCreateGamesModalOpen(true)}>Create Game</Button>
          </Toolbar>
        </AppBar>
      <Grid container       sx={{ m: 0.5 }}

>
      {games.map((game) => {
          return (
            <Grid item xs={"auto"} sx={{ p: 2 }}> 
              <Game data={game} onGameDelete={deleteGame}/>
            </Grid>
          )
        })} 
      </Grid>
    </div>
  );
}

export default App;
