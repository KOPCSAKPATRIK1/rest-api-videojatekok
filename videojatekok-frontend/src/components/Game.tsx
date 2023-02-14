import { Button, Card, CardActions, CardContent, Typography, Box, withWidth } from '@material-ui/core';
import React from 'react'
import { GameDto } from '../api/dto/game.dto'
import { VideoGameApi } from '../api/videoGame.api';

type Props = {
    data: GameDto;
    onGameDelete: (gameId: number) => void;
}



const Game = ({data, onGameDelete}: Props) => {

    const deleteGame = async () => {
        await VideoGameApi.deleteOne(data.id)
        onGameDelete(data.id);
    }

    return (
        <Card>
            <CardContent>
                <Typography>
                    {data.name}
                </Typography>
                <Typography>
                    {data.price}
                </Typography>
                <Typography>
                    {data.category}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={deleteGame} size="small">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default Game