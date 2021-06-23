import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  FirstName: String;

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
