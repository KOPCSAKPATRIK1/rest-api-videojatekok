import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { VideoGame } from './entities/videoGame.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('games')
  async getGames() {
    const gameRepo = this.dataSource.getRepository(VideoGame);
    return gameRepo.find();
  }

  @Post('games')
  async createGame(@Body() game: VideoGame) {
    game.id = undefined;
    const gameRepo = this.dataSource.getRepository(VideoGame);
    gameRepo.save(game);
  }

  @Delete('games/:id')
  async deleteGame(@Param('id') id: number) {
    const gameRepo = this.dataSource.getRepository(VideoGame);
    gameRepo.delete(id);
  }
}
