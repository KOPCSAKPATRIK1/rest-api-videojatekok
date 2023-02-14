import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class VideoGame {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  category: string;
}
