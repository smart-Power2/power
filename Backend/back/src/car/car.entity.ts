import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Car {
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