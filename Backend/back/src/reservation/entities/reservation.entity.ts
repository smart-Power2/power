import { Entity, Column, PrimaryGeneratedColumn , OneToMany  ,  JoinColumn, ManyToOne} from 'typeorm';
import{User} from '../../user/user.entity'
import {Car} from '../../car/entities/car.entity'

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    takeItAt:Date;

    @Column()
    returnItAt:Date;

    @ManyToOne(() => User, user => user.id)
    user: User;

    @ManyToOne(() => Car, car => car.id)
    car: Car;
   

}