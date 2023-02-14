import { CreateGameDto } from "./dto/createGame.dto";
import { GameDto } from "./dto/game.dto";

export class VideoGameApi {
    public static async getAll(): Promise<GameDto[]> {
        const resp = await fetch("http://localhost:3000/games", {
            method: "GET"
        })
        const data = await resp.json();

        return data;
    }

    public static async deleteOne(id: number) {
        const resp = await fetch('http://localhost:3000/games/ ' + id, {
            method: "DELETE"
        })
    }

    public static async createOne(createRequest: CreateGameDto) {
        const resp = await fetch("http://localhost:3000/games", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(createRequest)
        })

        const data = await resp.json();
        return data;
    }
}