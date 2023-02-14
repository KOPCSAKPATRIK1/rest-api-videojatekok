import { GameDto } from "./dto/game.dto";

export class VideoGameApi {
    public static async getAll(): Promise<GameDto[]> {
        const rep = await fetch("http://localhost:3000/entities", {
            method: "GET"
        })
        const data = await rep.json();

        return data;
    }
}