import { Entity, Column, PrimaryGeneratedColumn , ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';
@Entity()
export class Car {

  @ManyToOne(() => User, user => user.FirstName) 
  users: User[];

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  engine: string;
  
  @Column()
  price: number;

  @Column()
  seats: number;

  @Column()
  doors: number;

  @Column()
  suitcases: number;

  @Column()
  airconditioner: string;

  @Column()
  transmission: string;

  @Column()
  file: string;
}