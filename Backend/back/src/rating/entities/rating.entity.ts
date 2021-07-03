
import { Entity, Column, PrimaryGeneratedColumn , OneToOne,OneToMany  ,  JoinColumn} from 'typeorm';
import{User} from '../../user/user.entity'
import {Car} from '../../car/car.entity'

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id:number ;

    @OneToOne(() => User , user=>user.id) 
    @JoinColumn()
    user: User; 

    @OneToMany(() => Car ,car=>car.id) 
    @JoinColumn()
    car: Car; 

    @Column()
    stars:number;

    

}