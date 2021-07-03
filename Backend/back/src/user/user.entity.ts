import { Column, Entity, PrimaryGeneratedColumn ,OneToMany, ManyToOne} from 'typeorm';
import {Car} from '../car/car.entity'
import {Reservation} from '../reservation/entities/reservation.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  FirstName: String;

    @OneToMany(()=>Car, car =>car.users)
    cars : Car [] | null

    // @OneToMany(()=>Reservation , reservation=>reservation.user)
    // reservation:Reservation[];


  @Column()
  LastName: String;

  @Column()
  email: String;

  @Column()
  phoneNumber: Number;

  @Column()
  password: String;

  @Column( {default: ""})
  image: String;

  @Column( {default: ""})
  adress: String;

  @Column( {default: null})
  cin: Number;

  @Column( {default: ""})
  type: String;
}
