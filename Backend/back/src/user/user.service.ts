import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
// export type User = any;
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // private readonly users = [
  //   {
  //     id: 1,
  //     FirstName: 'dfgdfg',
  //     LastName: 'string',
  //     Email: 'string',
  //     phoneNumber: 4,
  //     password: 'string',
  //     image: 'string',
  //     adress: 'string',
  //     cin: 0,
  //     type: 'string',
  //   },
  //   {
  //     id: 2,
  //     FirstName: 'khalil',
  //     LastName: 'string',
  //     Email: 'string',
  //     phoneNumber: 4,
  //     password: 'string',
  //     image: 'string',
  //     adress: 'string',
  //     cin: 0,
  //     type: 'string',
  //   },
  // ];

  async findOne(email: string): Promise<User | undefined> {
    console.log(email);
    return this.usersRepository.findOne({ Email: email });
  }

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.FirstName = createUserDto.FirstName;
    user.LastName = createUserDto.LastName;
    user.Email = createUserDto.Email;
    user.phoneNumber = createUserDto.phoneNumber;
    user.password = createUserDto.password;
    await this.usersRepository.save(user);
    return user;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // findOne(id: number): Promise<User> {
  //   return this.usersRepository.findOne(id);
  // }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
}
// @Injectable()
// export class UserService {
//   private readonly users = [
//     {
//       id: 1,
//       username: 'john',
//       password: 'changeme',
//     },
//     {
//       userId: 2,
//       username: 'maria',
//       password: 'guess',
//     },
//   ];

//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find((user) => user.username === username);
//   }
// }
