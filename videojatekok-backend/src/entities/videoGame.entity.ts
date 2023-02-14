import { IsInt, MaxLength, Min } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VideoGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MaxLength(20, { message: 'A név maximum 15 karakter lehet' })
  name: string;

  @Column()
  @IsInt({ message: 'Az árnak számnak kell lennie' })
  @Min(1000, { message: 'Az árnak minimum 1000 forintnak kell lennie' })
  price: number;

  @Column()
  category: string;
}
