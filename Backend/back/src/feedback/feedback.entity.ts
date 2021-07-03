import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import{User} from '../user/user.entity'
import{Car} from '../car/entities/car.entity'


@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(() => User, user => user.FirstName) 
  idUser: User[
    
  ];

  @ManyToOne(() => Car, car => car.id)
  idCar: Car;

  @Column()
  content: String; 
}