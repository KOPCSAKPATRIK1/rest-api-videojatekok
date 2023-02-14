import { GameDto } from "./dto/game.dto";

export class VideoGameApi {
    public static async getAll(): Promise<GameDto[]> {
        const rep = await fetch("http://localhost:3000/games", {
            method: "GET"
        })
        const data = await rep.json();

        return data;
    }

    public static async deleteOne(id: number) {
        const rep = await fetch('http://localhost:3000/games/ ' + id, {
            method: "DELETE"
        })
    }


}